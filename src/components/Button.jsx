import React from 'react'

const Button = ({
    id,
    leftIcon,
    containerClass
    }) => {

  return (
    <Button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}

    </Button>
  )
}

export default Button
