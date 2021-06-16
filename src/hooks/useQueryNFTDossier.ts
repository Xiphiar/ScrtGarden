import { useQuery } from 'react-query'

import { ResultNFTDossier } from '../../interface/nft'
import { UINFTDossier } from '../../interface/nft-ui'
import { Snip721ApprovalToUI, expirationToUI } from '../../utils/dataParser'
import { queryChain } from '../../utils/secretjs'

const useQueryNFTDossier = (
  contractAddress: string,
  id: string,
  walletAddress?: string,
  viewingKey?: string
) => {
  return useQuery<ResultNFTDossier, Error, UINFTDossier>(
    ['nftDossier', walletAddress, contractAddress, id],
    () =>
      queryChain.queryContractSmart(contractAddress, {
        nft_dossier: {
          token_id: id,
          ...(!!walletAddress && {
            viewer: { address: walletAddress, viewing_key: viewingKey },
          }),
          include_expired: false,
        },
      }),
    { refetchOnWindowFocus: false, select: formatNFTDossier }
  )
}

const formatNFTDossier = (original: ResultNFTDossier): UINFTDossier => {
  const {
    nft_dossier: {
      display_private_metadata_error,
      inventory_approvals,
      owner,
      owner_is_public,
      private_metadata,
      private_metadata_is_public,
      private_metadata_is_public_expiration,
      public_metadata: {
        attributes: pubAttrs,
        description: pubDesc,
        image: pubImg,
        name: pubName,
        properties: pubProps,
      },
      public_ownership_expiration,
      token_approvals,
    },
  } = original

  const privateMetadata = !private_metadata
    ? null
    : {
        image: private_metadata.image,
        properties: private_metadata.properties
          ? JSON.parse(private_metadata.properties)
          : { content: '' },
      }

  const publicMetadata = {
    attributes: pubAttrs ? JSON.parse(pubAttrs) : [],
    description: pubDesc,
    image: pubImg,
    name: pubName,
    properties: pubProps ? JSON.parse(pubProps) : {},
  }

  return {
    displayPrivateMetadataError: display_private_metadata_error,
    owner,
    ownerIsPublic: owner_is_public,
    privateMetadata,
    privateMetadataIsPublic: private_metadata_is_public,
    privateMetadataIsPublicExpiration: expirationToUI(
      private_metadata_is_public_expiration
    ),
    publicMetadata,
    publicOwnershipExpiration: expirationToUI(public_ownership_expiration),
    inventoryApprovals: inventory_approvals.map((item) =>
      Snip721ApprovalToUI(item)
    ),
    tokenApprovals: token_approvals.map((item) => Snip721ApprovalToUI(item)),
    isSealed:
      display_private_metadata_error ===
      'Sealed metadata must be unwrapped by calling Reveal before it can be viewed',
  }
}

export default useQueryNFTDossier
