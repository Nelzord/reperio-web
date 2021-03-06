import { react } from '@babel/types'
import { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand" href="#">Reperio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/link/to/google.com">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link active" href="#">Donate <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link active" href="#">Our Team <span class="sr-only">(current)</span></a>
                    </div>
                </div>
            </nav>
            


        )
    }
}

export default NavBar