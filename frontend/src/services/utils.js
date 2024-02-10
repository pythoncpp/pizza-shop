import config from '../config'

export function createUrl(path) {
  return `${config.server}/${path}`
}

export function createError(error) {
  return { status: 'error', error }
}
