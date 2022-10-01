import NavbarAvatar from 'modules/auth/view/NavbarAvatar';
import {themeList} from 'modules/theme/themeList';

export const SecondHalfNavbar = () => {
  return (
    <section className="w-full flex justify-end">
      <div className="flex justify-end h-full w-full">
        <select
          data-choose-theme
          title="selecione seu tema"
          id="theme-select"
          className="select max-w-xs mr-4"
          defaultValue=""
        >
          <option disabled value="">
            Selecione seu tema:
          </option>
          {themeList.map(theme => (
            <option value={theme} key={theme}>
              {theme}
            </option>
          ))}
        </select>
        <NavbarAvatar />
      </div>
    </section>
  );
};
