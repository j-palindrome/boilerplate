import event from './document/event'
import post from './document/post'
import project from './document/project'
import service from './document/service'
import bio from './page/bio'
import settings from './page/settings'
import assetInfo from './type/assetInfo'
import bannerInfo from './type/bannerInfo'
import content from './type/content'
import description from './type/description'
import fontInfo from './type/fontInfo'
import imageInfo from './type/imageInfo'
import rawAssetInfo from './type/rawAssetInfo'

const documents = [event, post, project, service]

const pages = [bio, settings]

const types = [
  assetInfo,
  bannerInfo,
  content,
  description,
  imageInfo,
  rawAssetInfo,
  fontInfo
]

export const schema = {
  types: [...documents, ...pages, ...types]
}
