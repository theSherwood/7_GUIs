import { html } from 'sinuous'
import {app} from './app'

document.querySelector('#root').append(html`<${app} />`)