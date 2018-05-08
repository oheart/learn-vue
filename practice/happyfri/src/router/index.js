import App from '../App'
import home from '../page/home'
import item from '../page/item'
import score from '../page/score'

export default[{
  path: '/',
  component: App,
  children:[
    {
      path: '',
      component: home
    },
    {
      path: '/item',
      component: item
    },
    {
      path: '/score',
      component: score
    }
  ]
}]
