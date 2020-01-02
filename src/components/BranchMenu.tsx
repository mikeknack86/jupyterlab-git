import * as React from 'react';

/**
 * Interface describing component properties.
 */
export interface IBranchMenuProps {}

/**
 * Interface describing component state.
 */
export interface IBranchMenuState {}

/**
 * React component for rendering a branch menu.
 */
export class BranchMenu extends React.Component<
  IBranchMenuProps,
  IBranchMenuState
> {
  /**
   * Returns a React component for rendering a branch menu.
   *
   * @param props - component properties
   * @returns React component
   */
  constructor(props: IBranchMenuProps) {
    super(props);
  }
}
