import React from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { useContext } from 'react';

interface Props {
  toppleTheme(): void
}

const SwitchTheme: React.FC<Props> = ({ toppleTheme }) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <div className="switch-theme">
      <Switch
        onChange= { toppleTheme }
        checked= { title === 'light' }
        checkedIcon= { false }
        uncheckedIcon= { false }
        height= {15}
        width={40}
        handleDiameter={15}
        onColor={colors.button}
        offColor={shade(0.15, colors.secundaryButton)}
      />
    </div>
  )
}

export default SwitchTheme;