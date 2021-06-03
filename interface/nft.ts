import { Coin } from 'secretjs/types/types'

export interface Config {
  public_token_supply: boolean
  public_owner: boolean
  enable_sealed_metadata: boolean
  unwrapped_metadata_is_private: boolean
  minter_may_update_metadata: boolean
  owner_may_update_metadata: boolean
  enable_burn: boolean
}

interface PostInitCallback {
  msg: string
  contract_address: string
  code_hash: string
  send: Coin[]
}

export interface InitMsg {
  name: string
  symbol: string
  entropy: string
  admin?: string
  config?: Config
  post_init_callback?: PostInitCallback
}

export interface Metadata {
  name: string
  description?: string
  image: string
  properties?: string
  attributes?: string
}

export interface MintNFT {
  token_id?: string
  owner?: string
  public_metadata?: Metadata
  private_metadata?: Partial<Metadata>
  memo?: string
  padding?: string
}

export interface Tokens {
  tokens: string[]
}

export interface ViewerInfo {
  address: string
  viewing_key: string
}

export type Expiration =
  | {
      at_time: number
    }
  | {
      at_height: number
    }
  | 'never'

export interface Snip721Approval {
  address: string
  view_owner_expiration: Expiration | null
  view_private_metadata_expiration: Expiration | null
  transfer_expiration: Expiration | null
}

export interface NFTDossier {
  owner?: string
  public_metadata?: Metadata
  private_metadata?: Metadata | null
  display_private_metadata_error?: string
  owner_is_public: boolean
  public_ownership_expiration?: Expiration
  private_metadata_is_public: boolean
  private_metadata_is_public_expiration?: Expiration
  token_approvals?: Snip721Approval[]
  inventory_approvals?: Snip721Approval[]
}

export type AccessLevel = 'approve_token' | 'revoke_token' | 'all' | 'none'

export interface SetGlobalApproval {
  token_id?: string
  view_owner?: AccessLevel
  view_private_metadata?: AccessLevel
  expires?: Expiration
  padding?: string
}

export type Status = 'success' | 'failure'

export interface QInventoryApprovals {
  address: string
  viewing_key: string
  include_expired?: boolean
}

export interface RInventoryApprovals {
  owner_is_public: boolean
  public_ownership_expiration: Expiration
  private_metadata_is_public: boolean
  private_metadata_is_public_expiration: Expiration
  inventory_approvals: Snip721Approval[]
}

/**************************** ******************************/

/**
 *  Queries
 */

export interface QueryContractInfo {
  contract_info: {}
}

export interface QueryTokens {
  tokens: {
    owner: string
    viewer?: string
    viewing_key?: string
    start_after?: string
    limit?: number
  }
}

export interface QueryNFTDossier {
  nft_dossier: {
    token_id: string
    viewer?: ViewerInfo
    include_expired?: boolean
  }
}

export interface QueryNFTInfo {
  nft_info: {
    token_id: string
  }
}

export interface QueryInventoryApprovals {
  inventory_approvals: QInventoryApprovals
}

/**
 *  HandleMsg
 */

export interface HandleMintNFT {
  mint_nft: MintNFT
}

export interface HandleBatchMintNFT {
  batch_mint_nft: {
    mints: MintNFT[]
  }
}

export interface HandleCreateViewingKey {
  create_viewing_key: {
    entropy: string
    padding?: string
  }
}

export interface HandleSetGlobalApproval {
  set_global_approval: SetGlobalApproval
}

/**
 *  Results
 */

export interface ResultContractInfo {
  contract_info: {
    name: string
    symbol: string
  }
}

export interface ResultTokens {
  token_list: Tokens
}

export interface ResultNFTDossier {
  nft_dossier: NFTDossier
}

export interface ResultNFTInfo {
  nft_info: Metadata
}

export interface ResultSetGlobalApproval {
  set_global_approval: {
    status: Status
  }
}

export interface ResultInventoryApprovals {
  inventory_approvals: RInventoryApprovals
}
