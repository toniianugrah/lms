import * as React from 'react';
import { LockIcon, MailIcon, SearchIcon, UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils/class-names';

const Input = React.forwardRef(
  ({ icon = false, className, type, isIgnoreSpace, ...props }, ref) => {
    const iconClass = 'text-gray-500 w-5 h-5 left-2.5 absolute';
    const disabled = props.disabled;

    switch (icon) {
      case 'search':
        icon = <SearchIcon className={iconClass} />;
        break;
      case 'mail':
        icon = <MailIcon className={iconClass} />;
        break;
      case 'user':
        icon = <UserIcon className={iconClass} />;
        break;
      case 'password':
        icon = <LockIcon className={iconClass} />;
        break;
    }

    const handleIgnoreSpace = (e) => {
      const SPACE_CHARCODE = 32;

      if (e.which === SPACE_CHARCODE) {
        e.preventDefault();
      }
    };

    return (
      <div
        className={cn(
          'relative flex items-center overflow-hidden rounded-md bg-transparent shadow ring-1 ring-gray-950/10 transition-colors',
          'focus-within:ring-1 focus-within:ring-primary-500',
          'has-[[aria-invalid="true"]]:ring-1 has-[[aria-invalid="true"]]:ring-red-500',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        {icon}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full bg-transparent pr-3 text-sm',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-gray-500',
            'focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            icon ? 'pl-[38px]' : 'pl-3'
          )}
          ref={ref}
          onKeyDown={isIgnoreSpace ? handleIgnoreSpace : undefined}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
