export type TypographyProps = {
  element?: any;
  className?: string;
};

export type TypographChildren = {
  P: React.FC<TypographyProps>;
  H1: React.FC<TypographyProps>;
  H2: React.FC<TypographyProps>;
  H3: React.FC<TypographyProps>;
  H4: React.FC<TypographyProps>;
  H5: React.FC<TypographyProps>;
  H6: React.FC<TypographyProps>;
  Small: React.FC<TypographyProps>;
};
