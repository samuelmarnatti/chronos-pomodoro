import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { useState } from 'react';
export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(taskName);
  }
  return (
    <form className='form' action='' onSubmit={handleCreateNewTask}>
      <div className='formRow'>
        <DefaultInput labelText='task' id='meuInput' type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        <DefaultButton icon={<StopCircleIcon />} color='red' />
      </div>
    </form>);
}