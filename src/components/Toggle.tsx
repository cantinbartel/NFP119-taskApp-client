import { Switch } from '@headlessui/react';

type ToggleProps = {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
};

const Toggle = ({ enabled, setEnabled }: ToggleProps) => (
  <div className="">
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-sky-600' : 'bg-red-400'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 mt-2 mb-4`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  </div>
);

export default Toggle;
