import * as React from 'react';
import { cva } from 'class-variance-authority';
import { LoaderIcon } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils/class-names';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-800 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: cn(
          'h-10 select-none rounded-md bg-primary-500 leading-10 text-gray-50 shadow ring-1 ring-primary-500',
          'hover:bg-primary-500/90 hover:ring-primary-500/90',
          'active:bg-primary-600 active:ring-primary-600'
        ),
        destructive: cn(
          'h-10 select-none rounded-md bg-red-500 leading-10 text-gray-50 shadow ring-1 ring-red-500',
          'hover:bg-red-500/90 hover:ring-red-500/90',
          'active:bg-red-700 active:ring-red-700'
        ),
        'outline-destructive':
          'bg-red-50 text-red-600 shadow shadow-red-100 ring-1 ring-red-500/20 hover:bg-red-100 active:bg-red-200 active:text-red-700',
        outline:
          'bg-white shadow ring-1 ring-gray-950/10 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200',
        ghost: 'hover:bg-gray-100 hover:text-gray-900 active:bg-gray-900',
        link: 'text-primary-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      disabled,
      loading = false,
      asChild = false,
      loadingText,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonText = loading ? loadingText : props.children;

    const loader = (
      <LoaderIcon
        className={cn('animate-spin-slow size-5', loadingText && 'mr-2')}
      />
    );

    return (
      <Comp
        disabled={loading || disabled}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading && <span>{loader}</span>}
        {buttonText}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
