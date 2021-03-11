export const ROOT_ID: unique symbol = Symbol('ROOT_ID');

const ContextId = {
  [ROOT_ID]: ROOT_ID,
} as const;

export function getId(id: keyof typeof ContextId) {
  switch (id) {
    case ContextId[ROOT_ID]:
      return 'Flipbook Root Context';
  }
}
