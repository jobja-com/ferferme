import { encode as qsEncode } from 'querystring';
import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';

import { signedIn } from '../redux/action-creators';
import SignupForm from './signup-form';
import { CookiesBanner } from './cookies-banner';
import { useExtAuthProviders, providerTitle } from './ext-auth-helpers';
import { ExtAuthButtons, SIGN_UP } from './ext-auth-buttons';

export default React.memo(function Signup() {
  return (
    <div className="box">
      <div className="box-header-timeline">Hello</div>
      <div className="box-body">
        <div className="col-md-12">
          <h2 className="p-signin-header">Sign up</h2>
          <CookiesBanner />
          <SignupForm />
          <ExtAuthSignup />
        </div>
      </div>
      <div className="box-footer" />
    </div>
  );
});

const ExtAuthSignup = React.memo(function ExtAuthSignup() {
  const dispatch = useDispatch();
  const [providers] = useExtAuthProviders();
  const result = useSelector((state) => state.extAuth.signInResult);

  // No deps: we are specifically intresting in the initial value of result.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const comeWithResult = useMemo(() => !!result.status, []);

  const doSignIn = useCallback(() => dispatch(signedIn(result.authToken)), [
    dispatch,
    result.authToken,
  ]);

  // Do not show anything if we open this page with auth result
  // or there are no allowed providers
  if (comeWithResult || providers.length === 0) {
    return null;
  }

  return (
    <>
      <p>Or use external service profile to create FreeFeed account:</p>
      <ExtAuthButtons mode={SIGN_UP} />
      {result.status === 'signed-in' && (
        <div className="alert alert-success" role="alert">
          <p>
            This {providerTitle(result.profile.provider)} account is already connected to{' '}
            <strong>@{result.user.username}</strong> FreeFeed account. Is it you?
          </p>
          <p>
            <button className="btn btn-success" onClick={doSignIn}>
              Sign in and continue as <strong>@{result.user.username}</strong>
            </button>
          </p>
        </div>
      )}
      {result.status === 'continue' && (
        <div className="alert alert-success" role="alert">
          <p>Excellent! Now you can edit the form above and create a new account.</p>
        </div>
      )}
      {result.status === 'user-exists' && (
        <div className="alert alert-warning" role="alert">
          <p>
            There is already a FreeFeed account with the address{' '}
            <strong>{result.profile.email}</strong>.
          </p>
          <p>
            If this is you, you should <Link to="/signin">sign in</Link> with your username/e-mail
            and password or in any other way allowed for your account.
          </p>
          <p>
            If you have forgotten your password, you can{' '}
            <Link to={`/restore?${qsEncode({ email: result.profile.email })}`}>
              reset it and set the new one
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
});
