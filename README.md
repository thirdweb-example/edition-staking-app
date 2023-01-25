# Edition Staking App

## Introduction

This example demonstrates a use of several thirdweb tools to create an NFT Staking application. In this example, users can stake their ERC1155 NFTs and earn ERC20 tokens as a reward. It combines:

- [Edition Drop contract](https://thirdweb.com/thirdweb.eth/DropERC1155): To create a collection of NFTs that users can stake.
- [Token contract](https://thirdweb.com/thirdweb.eth/TokenERC20): To create a token that users can earn as a reward for staking.
- [Edition Staking contract](https://thirdweb.com/thirdweb.eth/EditionStake): To create a contract that users can stake their NFTs in, and earn tokens as a reward.

## Using This Template

Create a project using this example:

```bash
npx thirdweb create --template edition-staking-app
```

- Create an [Edition Drop](https://thirdweb.com/thirdweb.eth/DropERC1155) contract using the dashboard.
- Create a [Token](https://thirdweb.com/thirdweb.eth/TokenERC20) contract using the dashboard.
- Create an [Edition Staking](https://thirdweb.com/thirdweb.eth/EditionStake) contract using the dashboard.
- Approve the Edition Staking contract to transfer your tokens.
- Deposit the tokens into the Edition Staking contract.
- Update the information in the [contractAddresses.ts](./consts/contractAddresses.ts) file to

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
