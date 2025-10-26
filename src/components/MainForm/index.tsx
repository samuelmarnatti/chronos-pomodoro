import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
export function MainForm() {
  return (
    <form className='form' action=''>
      <button type="button">Iniciar</button>
      <div className='formRow'>
        <DefaultInput labelText='task' id='meuInput' type='text' />
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