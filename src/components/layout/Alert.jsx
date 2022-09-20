import { useContext } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
          <BiErrorAlt className="text-red-500 text-3xl" />
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
