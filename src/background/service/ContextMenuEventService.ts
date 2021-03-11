import { ContextId } from '../../common/lib/struct';

function onClickEventListener(info: chrome.contextMenus.OnClickData) {
  switch (info.menuItemId) {
    case ContextId.getId(ContextId.ROOT_ID):
      console.log('이미지 클릭 이벤트');
  }
}

export function addClickEventListener() {
  chrome.contextMenus.onClicked.addListener(onClickEventListener);
}
