import React from 'react'
import { inputStyles as styles } from '../assets/dummystyle'
import { Eye, EyeOff } from 'lucide-react'

export const Input = ({value, onChange, label,placeholder, type= 'text' }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const styles= inputStyles;

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`}>
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inputField}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {type === 'password' && (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      
    </div>
  )
}

export default Input
