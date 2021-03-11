import { ContextId } from '../../common/lib/struct';

function create(prop: chrome.contextMenus.CreateProperties) {
  return new Promise((resolve, reject) => {
    chrome.contextMenus.create(prop, () => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      }

      resolve(prop.id);
    });
  });
}

export function createImageContextMenu() {
  return create({
    id: ContextId.getId(ContextId.ROOT_ID),
    contexts: ['image'],
    title: 'Save image to Flipbook',
  });
}
