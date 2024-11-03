import React from 'react';

type MultiLineTitleProps = {
  id?: string;
  title: string;
  className?: string;
  separator?: string | RegExp;
  as?: keyof React.JSX.IntrinsicElements;
};

export function MultiLineTitle({
  id,
  title,
  className,
  separator = /\n/,
  as: Wrapper = 'div', // default to div
}: MultiLineTitleProps): React.JSX.Element | null {
  if (!title || typeof title !== 'string') {
    return null;
  }

  const trimmedTitle = title.trim();
  if (!trimmedTitle) {
    return null;
  }

  const lines = trimmedTitle.split(separator);

  return (
    <Wrapper id={id} className={className}>
      {lines.map((line, index) => {
        const isLastLine = index === lines.length - 1;
        return (
          <React.Fragment key={index}>
            {line.trim()}
            {!isLastLine && <br />}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

/* 
  MultiLineTitle
  ------------------------------------------------------------------------
  - Basic usage with default div wrapper
    <MultiLineTitle title="Line 1\nLine 2" />

  - With custom paragraph wrapper
    <MultiLineTitle 
      title="Line 1\nLine 2" 
      as="p" 
    />

  - With custom separator and wrapper
    <MultiLineTitle 
      title="Line 1|Line 2" 
      separator="|"
      as="h1" 
      className="text-xl" 
    />

  - With span for inline usage
    <MultiLineTitle 
      title="Line 1\nLine 2" 
      as="span" 
    />
 */
