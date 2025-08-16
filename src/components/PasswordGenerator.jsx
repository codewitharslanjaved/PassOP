// PasswordGenerator.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characterPool = '';
    if (includeUppercase) characterPool += upperCaseLetters;
    if (includeLowercase) characterPool += lowerCaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (characterPool === '') {
      alert('Please select at least one character type');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to Clipboard!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  };

  return (
    <div className="fixed pass-generator bottom-14 right-4 w-80 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4">Password Generator</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="4"
          max="64"
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
          className="mr-2"
        />
        <label>Include Uppercase Letters</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
          className="mr-2"
        />
        <label>Include Lowercase Letters</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
          className="mr-2"
        />
        <label>Include Numbers</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
          className="mr-2"
        />
        <label>Include Symbols</label>
      </div>
      <button
        onClick={generatePassword}
        className="mt-3 w-full bg-blue-500 text-white p-2 rounded"
      >
        Generate Password
      </button>
      <div className="mt-3 flex flex-col items-center">
        <h3 className="text-sm font-semibold flex-grow">Generated Password:</h3>
        <div className="flex items-center justify-center">

          <input
            type="text"
            value={password}
            readOnly
            className="mt-1 p-2 w-full border rounded text-center"
            />
        <div
          className="lordicon-copy cursor-pointer ml-2"
          onClick={() => copyText(password)}
          >
          <lord-icon
            src="https://cdn.lordicon.com/iykgtsbt.json"
            trigger="hover"
            style={{ width: '25px', height: '25px' }}
            ></lord-icon>
        </div>
      </div>
        </div>
      <ToastContainer />
    </div>
  );
};

export default PasswordGenerator;
