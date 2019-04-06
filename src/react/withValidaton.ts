/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'
import { ValidationRule } from '../types'
import Validation from '../factory'

interface ReactValidationConfig {
  initalRules?: ValidationRule[];
  renderError?: Function;
  showErrorInPlaceholder?: boolean;
  errorStyles?: Record<string, any>;
}

interface HOCProps {
  onChangeText: Function;
  rules?: ValidationRule[];
  value: string;
}

interface HOCState {
  value: string;
  error?: string;
  valid: boolean;
}

export default (
  WrappedComponent: any,
  config: ReactValidationConfig,
): React.ReactNode => {
  const {
    initalRules = [],
    renderError = null,
    showErrorInPlaceholder = false,
    errorStyles = {},
  } = config
  return class extends React.Component<HOCProps, HOCState> {
    public constructor(props: HOCProps) {
      super(props)
      this.state = {
        value: '',
        error: '',
        valid: true,
      }
    }

    private validator = Validation.factory()

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    private onChangeText = (value: string) => {
      const { onChangeText: propsOnChange } = this.props
      if (propsOnChange) propsOnChange()
      this.setState({ value })
      this.validate(value)
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    private validate = (value: string) => {
      const { success, failed } = this.validator.runWithValue(value)
      if (success) {
        this.setState({ valid: true })
      } else {
        this.setState({
          valid: false,
          error: failed ? failed.message : '',
        })
      }
    }

    public render(): React.ReactNode {
      const { rules } = this.props
      const { value } = this.state
      return React.cloneElement(
        WrappedComponent,
        Object.assign(this.props, {
          value,
          rules,
          onChangeText: this.onChangeText,
        }),
      )
    }
  }
}
