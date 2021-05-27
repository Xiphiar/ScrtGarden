const MAX_GAS = {
  SNIP20: {
    INIT_MSG: '180000',
    MINT: '180000',
    BURN: '160000',
    SET_MINTERS: '150000',
    CHANGE_ADMIN: '140000',
    SET_CONTRACT_STATUS: '130000',
  },
  NFT: {
    INIT_MSG: '180000',
  },
}

const CONTRACT_CODE_ID = {
  SNIP20: 28966,
  NFT: 29176,
}

const SIDEBAR_TABS = {
  HOME: {
    label: 'Home',
    icon: 'home-duo',
    route: '/',
  },
  TOKEN: {
    create: {
      label: 'Create',
      icon: 'industry-duo',
      route: '/create',
    },
    manage: {
      label: 'Manage',
      icon: 'tasks-alt-duo',
      route: '/manage',
      menu: [
        {
          label: 'Mint',
          icon: 'hand-holding-usd',
          route: '/manage/mint',
          as: undefined,
        },
        {
          label: 'Burn',
          icon: 'fire-duo',
          route: '/manage/burn',
          as: undefined,
        },
        {
          label: 'Minters',
          icon: 'users-duo',
          route: '/manage/minters',
          as: undefined,
        },
        {
          label: 'Admin',
          icon: 'user-crown-duo',
          route: '/manage/admin',
          as: undefined,
        },
      ],
    },
    track: {
      label: 'Track',
      icon: 'analytics-duo',
      route: '/track',
      menu: [
        {
          label: 'Transfers',
          icon: 'exchange-duo',
          route: '/track/transfers',
          as: undefined,
        },
        {
          label: 'Transactions',
          icon: 'list-ul-duo',
          route: '/track/transactions',
          as: undefined,
        },
      ],
    },
  },
  NFT: {
    collections: {
      label: 'Collections',
      icon: 'album-collection-duo',
      route: '/nft/collections',
    },
  },
}

const MYTOKENESS_NFT_CONTRACTS = {
  secret1zf4f60zr0lepc3339knvtp0aawgfnrfj8dshru: {
    name: 'Sealed Private Collection',
    symbol: '',
    icon: 'stamp-duo',
  },
  secret1wet30m6zw35uxw0n6tz07ehdegjeygaw3zrvr2: {
    name: 'Private Collection Long Title To See what',
    symbol: '',
    icon: 'palette',
  },
}

const FILE_UPLOADER = {
  ACCEPTS: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'audio/mp3',
    'audio/mpeg',
    'video/mp4',
  ],
  MAX_SIZE: 50000000, // 20mb
}

export {
  MAX_GAS,
  CONTRACT_CODE_ID,
  SIDEBAR_TABS,
  MYTOKENESS_NFT_CONTRACTS,
  FILE_UPLOADER,
}
