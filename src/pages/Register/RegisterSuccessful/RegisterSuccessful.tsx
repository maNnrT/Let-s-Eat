import { Link } from 'react-router-dom';
import config from '@/config';
function RegisterSuccessful() {
  return (
    <div className="flex flex-col items-center w-full shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
      <div className="font-light text-[3rem] text-666565 mt-[1rem]">Sign up succsess! </div>
      <Link to={config.routes.login} className="btn-secondary mt-[1rem]">
        Log in
      </Link>
    </div>
  );
}

export default RegisterSuccessful;
