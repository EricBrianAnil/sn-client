import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Search from '@material-ui/icons/Search'
import React from 'react'
import { connect } from 'react-redux'
import { componentType } from '../../services/TypeHelpers'
import { RootReducerType } from '../../store'

/**
 * maps state fields from the store to component props
 * @param state the redux state
 */
export const mapStateToProps = (state: RootReducerType) => {
  return {
    placeholder: state.sensenetDocumentViewer.localization.search,
  }
}

/**
 * maps state actions from the store to component props
 * @param state the redux state
 */
export const mapDispatchToProps = {}

/**
 * Defines the own props for the PagerState component
 */
export interface SearchBarState {
  searchValue: string
}

/**
 * Document widget component for paging
 */
export class SearchBarComponent extends React.Component<
  componentType<typeof mapStateToProps, typeof mapDispatchToProps>,
  SearchBarState
> {
  /** the component state */
  public state = { searchValue: '' }

  /**
   * sets the page to the specified value
   * @param page
   */
  public evaluateSearch() {
    console.log('Search triggered', this.state.searchValue)
  }

  private updateValue(value: string) {
    this.setState({
      ...this.state,
      searchValue: value,
    })
  }

  private handleKeyPress(ev: React.KeyboardEvent<HTMLDivElement>) {
    if (ev.key === 'Enter') {
      this.evaluateSearch()
    }
  }

  /**
   * renders the component
   */
  public render() {
    return (
      <Grid container={true} spacing={8} alignItems="center">
        <Grid item={true}>
          <Search />
        </Grid>
        <Grid item={true}>
          <TextField
            type="text"
            placeholder={this.props.placeholder}
            onKeyPress={ev => this.handleKeyPress(ev)}
            onSubmit={() => this.evaluateSearch()}
            onChange={ev => this.updateValue(ev.target.value)}
            inputProps={{ style: { color: 'white' } }}
          />
        </Grid>
      </Grid>
    )
  }
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBarComponent)

export { connectedComponent as SearchBar }
