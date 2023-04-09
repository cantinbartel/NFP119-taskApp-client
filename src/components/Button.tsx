import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const styles: any = {
  default: 'bg-sky-600 text-white py-2 px-4 w-fit rounded cursor-pointer hover:bg-sky-700',
  primary: 'bg-sky-600 text-white py-2 px-4 w-fit rounded cursor-pointer hover:bg-sky-700 hover:scale-105',
  danger: 'bg-red-600 text-white py-2 px-4 w-fit rounded cursor-pointer hover:bg-red-700'
}

const Button = ({ children, variant = 'default', className, onClick, disabled = false }: ButtonProps) => (
    <button 
      className={`${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}>{children}</button>
)

export default Button
