import { RouteProps } from 'react-router';

export type RouterProps = RouteProps & {
  component?: React.ComponentType;
  componentProps?: object;
};
