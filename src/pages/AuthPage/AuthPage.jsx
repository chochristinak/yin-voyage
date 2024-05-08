import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  return (
    <main className="auth-page">
      <h1 className="auth-page-heading">YIN-VOYAGE</h1>
      <div className="auth-page-divider"></div>
      <div>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
      </div>
    </main>
  );
}
