# DeToken SDK

A TypeScript SDK for interacting with DeToken protocol on the Sui blockchain. DeToken allows users to lock tokens and receive voting power in return.

## Installation

```bash
npm install detoken-sdk
```

## Usage

### Initialize Client

```typescript
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { DeTokenClient } from "detoken-sdk";

const suiClient = new SuiClient({ url: getFullnodeUrl("mainnet") });
const coinType = "YOUR_COIN_TYPE"; // e.g. "full token type"

// Initialize the client
const client = await DeTokenClient.initialize(suiClient, coinType);
```

### Core Functions

#### Lock Tokens

```typescript
const tx = new Transaction();
// Convert your coin to balance first
const balance = coinIntoBalance(tx, coinType, coin);
client.lockMoveCall(tx, balance, recipientAddress);
```

#### Request Unlock

```typescript
const tx = new Transaction();
client.requestUnlockMoveCall(
  tx,
  deTokenId,
  unlockAmount,
  unlockDuration // in milliseconds
);
```

#### Claim Unlocked Tokens

```typescript
const tx = new Transaction();
const balance = client.claimMoveCall(tx, deTokenId, requestIndex);
const coin = coinFromBalance(tx, coinType, balance);
```

#### Burn DeTokens

```typescript
const tx = new Transaction();
client.burnMoveCall(tx, deTokenId);
```

### Query Functions

#### Get Owned DeTokens

```typescript
const deTokens = await client.getOwnedDeTokens(ownerAddress);
```

#### Get Voting Power

```typescript
// Get total voting power in the system
const totalVotingPower = client.getTotalVotingPower();

// Get voting power for a specific DeToken
const deTokenVotingPower = client.getDeTokenVotingPower(deToken);
```

#### Calculate Returns

```typescript
// Get return rate for a specific duration
const returnRate = client.getReturnRate(unlockDuration);

// Calculate returned value
const returnedValue = client.calculateReturnedValue(value, unlockDuration);

// Calculate penalty value
const penaltyValue = client.calculatePenaltyValue(value, unlockDuration);
```

## Features

- Lock tokens to receive DeTokens
- Request token unlocking with customizable duration
- Claim unlocked tokens
- Calculate voting power
- Query DeToken information
- Calculate returns and penalties

## Admin Functions

```typescript
// Update duration parameters
client.updateDurationMoveCall(tx, minDuration, maxDuration);

// Update minimum return percentage rate
client.updateMinReturnPercentageRateMoveCall(tx, minReturnPercentageRate);

// withdraw penalty fee
client.withdrawPenaltyFeeMoveCall(tx, value);
```

