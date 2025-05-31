import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

const languageId = 71;

const MonacoEditor = () => {
  const [code, setCode] = useState(
    `# Two Sum implementation\ndef twoSum(nums, target):\n for i in range(len(nums)):\n for j in range(i + 1, len(nums)):\n if nums[i] + nums[j] == target:\n return [i, j]\n\nnums = [2, 7, 11, 15]\ntarget = 9\nprint(twoSum(nums, target));`
  );
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    try {
      const res = await axios.post(
        'https://sapient-ground-460717-a8.df.r.appspot.com/code/run',
        {
          source_code: code,
          language_id: languageId,
          stdin: '',
        }
      );
      setOutput(res.data.output);
    } catch (err) {
      console.error(err);
      setOutput('Error running code');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">LeetCode Clone - Two Sum</h1>
      <Editor
        height="400px"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button
        onClick={handleRun}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Run Code
      </button>
      <pre className="mt-4 bg-gray-100 p-2 border rounded">{output}</pre>
    </div>
  );
};

export default MonacoEditor;
