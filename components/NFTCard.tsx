import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  editionDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
  totalQuantityStaked: number
}

const NFTCard: FC<NFTCardProps> = ({ tokenId, totalQuantityStaked }) => {
  const { contract } = useContract(editionDropContractAddress, "edition-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div className={styles.nftBox}>
          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
          )}
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) =>
              contract?.call("withdraw", [nft.metadata.id, 1])
            }
            style={{
              marginBottom: "5px",
            }}
            contractAddress={stakingContractAddress}
          >
            Withdraw
          </Web3Button>
          <Web3Button
            action={(contract) =>
              contract?.call("withdraw", [nft.metadata.id, totalQuantityStaked.toString()])
            }
            contractAddress={stakingContractAddress}
          >
            Withdraw All
          </Web3Button>
        </div>
      )}
    </>
  );
};

export default NFTCard;
