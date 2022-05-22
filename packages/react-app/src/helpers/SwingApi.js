import axios from "axios";

const BASE_URI = "https://swap.dev.swing.xyz";

export const CHAIN_LIST = [
  "ethereum",
  "arbitrum",
  "avalanche",
  "boba",
  "bsc",
  "bsctest",
  "celo",
  "cronos",
  "fantom",
  "fuji",
  "fuse",
  "gnosis",
  "harmony",
  "heco",
  "metis",
  "moonbeam",
  "moonriver",
  "mumbai",
  "kovan",
  "goerli",
  "rinkeby",
  "ropsten",
  "aurora",
  "oec",
  "optimism",
  "polygon",
  "solana",
  "terra",
  "oasis",
  "dfk",
  "bttc",
  "kcc",
  "gather",
];

export const getQuote = async ({
  fromSymbol,
  toSymbol,
  amount,
  fromTokenAddress,
  fromChain,
  fromChainId,
  toChain,
  toChainId,
  fromUserAddress,
  toUserAddress,
  // toTokenAddress,
}) => {
  const endpoint = `${BASE_URI}/v0/transfer/quote?tokenSymbol=${fromSymbol}&toTokenSymbol=${toSymbol}&tokenAmount=${amount}&fromTokenAddress=${fromTokenAddress}&fromChain=${fromChain}&fromChainId=${fromChainId}&toChain=${toChain}&toChainId=${toChainId}&fromUserAddress=${fromUserAddress}&toUserAddress=${toUserAddress}`; //&toTokenAddress=${toTokenAddress}`;
  console.log("endpoint", endpoint);
  const response = await axios.get(endpoint, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getAllowance = async ({ tokenSymbol, tokenAddress, fromChain, fromChainId, fromAddress, bridge }) => {
  const endpoint = `${BASE_URI}/v0/transfer/allowance?tokenSymbol=${tokenSymbol}&tokenAddress=${tokenAddress}&fromChain=${fromChain}&fromChainId=${fromChainId}&fromAddress=${fromAddress}&bridge${bridge}`;
  console.log("endpoint", endpoint);
  const response = await axios.get(endpoint, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const approveBridge = async ({
  tokenSymbol,
  tokenAddress,
  tokenAmount,
  fromChain,
  fromChainId,
  fromAddress,
  bridge,
}) => {
  const endpoint = `${BASE_URI}/v0/transfer/approve?tokenSymbol=${tokenSymbol}&tokenAddress=${tokenAddress}&tokenAmount=${tokenAmount}&fromChain=${fromChain}&fromChainId=${fromChainId}&fromAddress=${fromAddress}&bridge=${bridge}`;
  console.log("endpoint", endpoint);
  const response = await axios.get(endpoint, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const sendTx = async ({
  tokenSymbol,
  toTokenSymbol,
  fromTokenAddress,
  tokenAmount,
  fromUserAddress,
  fromChain,
  fromChainId,
  toChain,
  toChainId,
  bridge,
}) => {
  const response = await axios.post(`${BASE_URI}/v0/transfer/send`, {
    tokenSymbol,
    toTokenSymbol,
    fromTokenAddress,
    tokenAmount,
    fromUserAddress,
    fromChain,
    fromChainId,
    toChain,
    toChainId,
    route: [
      {
        bridge,
        bridgeTokenAddress: "",
        name: tokenSymbol,
        part: 100,
      },
    ],
  });
  console.log(response.data);
  return response.data;
};

export const getTxStatus = async txHash => {
  const response = await axios.get(`${BASE_URI}/v0/transfer/status?txHash=${txHash}`, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getTxHistory = async userAddr => {
  const response = await axios.get(`${BASE_URI}/v0/transfer/history?userAddress=${userAddr}`, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getConfig = async () => {
  const response = await axios.get(`${BASE_URI}/v0/transfer/config`, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getTokenBalancesForAddress = async (chain_id, address) => {
  const endpoint = `https://api.covalenthq.com/v1/${chain_id}/address/${address}/portfolio_v2/?&key=${process.env.COVALENT_API_KEY}`;
  console.log("endpoint", endpoint);
  const response = await axios.get(endpoint, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
}
