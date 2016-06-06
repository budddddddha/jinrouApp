// default theme
import { AuthGlobals } from "redux-auth"

// material ui theme
import { AuthGlobals } from "redux-auth/material-ui-theme"

// bootstrap theme
import { AuthGlobals } from "redux-auth/bootstrap-theme"

// your main app component. notice that AuthGlobals lives at the same level
// as the app's children.
class App extends React.Component {
  render() {
    return (
      <div>
        <AuthGlobals />
        {this.props.children}
      </div>
    )
  }
}

// example routes. the nested routes here will replace "this.props.children"
// in the example above
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="alt" component={Alt} />
    <Route path="login" component={SignIn} />
    <Route path="account" component={Account} onEnter={requireAuth} />
  </Route>
)
