import { BigInt, log } from '@graphprotocol/graph-ts';
import { ERC721, Transfer as TransferEvent } from '../generated/ERC721/ERC721';
import { Token, Owner, Contract, Transfer } from '../generated/schema';

// export function handleApproval(event: Approval): void {
// // Entities can be loaded from the store using a string ID; this ID
// // needs to be unique across all entities of the same type
// let entity = ExampleEntity.load(event.transaction.from.toHexString())

// // Entities only exist after they have been saved to the store;
// // `null` checks allow to create entities on demand
// if (entity == null) {
//   entity = new ExampleEntity(event.transaction.from.toHexString())

//   // Entity fields can be set using simple assignments
//   entity.count = BigInt.fromI32(0)
// }

// // BigInt and BigDecimal math are supported
// entity.count = entity.count + BigInt.fromI32(1)

// // Entity fields can be set based on event parameters
// entity.owner = event.params.owner
// entity.approved = event.params.approved

// // Entities can be written to the store with `.save()`
// entity.save()

// // Note: If a handler doesn't require existing field values, it is faster
// // _not_ to load the entity from the store. Instead, create it fresh with
// // `new Entity(...)`, set the fields that should be updated and save the
// // entity back to the store. Fields that were not set or unset remain
// // unchanged, allowing for partial updates to be applied.

// // It is also possible to access smart contracts from mappings. For
// // example, the contract that has emitted the event can be connected to
// // with:
// //
// // let contract = Contract.bind(event.address)
// //
// // The following functions can then be called on this contract to access
// // state variables and other data:
// //
// // - contract.PRICE(...)
// // - contract.TOTAL_MAX_SUPPLY(...)
// // - contract.balanceOf(...)
// // - contract.baseURI(...)
// // - contract.colorOfOwnerByIndex(...)
// // - contract.contractOwner(...)
// // - contract.contractURI(...)
// // - contract.esvgURI(...)
// // - contract.exists(...)
// // - contract.founderContract(...)
// // - contract.getApproved(...)
// // - contract.getCollectionArray(...)
// // - contract.getCollectionHexString(...)
// // - contract.getLatestPrice(...)
// // - contract.getPrice(...)
// // - contract.getPriceSource(...)
// // - contract.isApprovedForAll(...)
// // - contract.isNameReserved(...)
// // - contract.name(...)
// // - contract.ownerOf(...)
// // - contract.priceFeedAddress(...)
// // - contract.renderSVG(...)
// // - contract.rgb(...)
// // - contract.supportsInterface(...)
// // - contract.svgURI(...)
// // - contract.symbol(...)
// // - contract.toLower(...)
// // - contract.tokenByIndex(...)
// // - contract.tokenIdToColor(...)
// // - contract.tokenIdToColorHex(...)
// // - contract.tokenNameById(...)
// // - contract.tokenOfOwnerByIndex(...)
// // - contract.tokenURI(...)
// // - contract.totalSupply(...)
// // - contract.validateName(...)
// }

export function handleTransfer(event: TransferEvent): void {
  log.info('Transfer detected. From: {} | To: {} | TokenID: {}', [
    event.params.from.toHexString(),
    event.params.to.toHexString(),
    event.params.tokenId.toHexString(),
  ]);
  // let previousOwner = Owner.load(event.params.from.toHexString());
  // let newOwner = Owner.load(event.params.to.toHexString());
  let token = Token.load(event.params.tokenId.toHexString());
  // let contract = Contract.load(event.address.toHexString());
  // let instance = ERC721.bind(event.address);

  log.info('qwertzuip1', []);

  // if (previousOwner == null) {
  //   previousOwner = new Owner(event.params.from.toHexString())
  //   previousOwner.ownedTokens = new Array<string>();
  // }
  // if (newOwner == null) {
  //   newOwner = new Owner(event.params.to.toHexString())
  //   newOwner.ownedTokens = new Array<string>();
  // }
  if (token == null) {
    log.info('qwertzuip2', []);
    token = new Token(event.params.tokenId.toHexString());
    log.info('qwertzuip2.1', []);
    token.owner = event.params.to.toHexString();
    log.info('qwertzuip2.2', []);
    // token.uri = instance.tokenURI(event.params.tokenId);
    log.info('qwertzuip2.3', []);
  }

  log.info('qwertzuip3', []);

  // if (contract == null) {
  //   contract = new Contract(event.address.toHexString());
  //   // contract.mintedTokens = new Array<string>();
  //   log.info('qwertzuip4', []);
  // }

  // newOwner.ownedTokens.push(token.id);

  // let index = previousOwner.ownedTokens.indexOf(token.id);
  // if (index >= 0) {
  //   previousOwner.ownedTokens.splice(index,1);
  // }
  log.info('qwertzuip5', []);

  // contract.name = instance.name();
  // contract.symbol = instance.symbol();
  // contract.totalSupply = instance.totalSupply();

  log.info('qwertzuip6', []);

  // The token is newly minted
  // if (contract.mintedTokens.indexOf(token.id) == -1) {
  //   let mintedTokens = contract.mintedTokens;
  //   mintedTokens.push(token.id);
  //   contract.mintedTokens = mintedTokens;
  // }

  // previousOwner.save();
  // newOwner.save();
  token.save();
  // contract.save();

  log.info('Done handleTransfer', []);
}
