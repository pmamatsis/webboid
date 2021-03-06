import { getEventPath, stopAndPrevent } from './event.js'
import { hasScrollbar } from './scroll.js'
import Platform from '../plugins/platform.js'

let registered = 0

function onWheel (e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e)
  }
}

function shouldPreventScroll (e) {
  if (e.target === document.body || e.target.classList.contains('q-layout-backdrop')) {
    return true
  }

  const
    path = getEventPath(e),
    delta = e.deltaY || -e.wheelDelta

  for (let index = 0; index < path.length; index++) {
    const el = path[index]

    if (hasScrollbar(el)) {
      return delta < 0 && el.scrollTop === 0
        ? true
        : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight
    }
  }

  return true
}

export default function (register) {
  registered += register ? 1 : -1
  if (registered > 1) { return }

  const action = register ? 'add' : 'remove'

  if (Platform.is.mobile) {
    document.body.classList[action]('q-body-prevent-scroll')
  }
  else if (Platform.is.desktop) {
    window[`${action}EventListener`]('wheel', onWheel)
  }
}
