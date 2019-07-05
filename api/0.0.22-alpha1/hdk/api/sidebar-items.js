initSidebarItems({"enum":[["BundleOnClose","Allowed input for close_bundle()"],["Dispatch",""],["LinkDirection",""]],"fn":[["call","Call an exposed function from another zome or another (bridged) instance running in the same conductor. Arguments for the called function are passed and resturned as `JsonString`. # Examples Here are two example Zomes, where one performs a `call` into the other."],["close_bundle","NOT YET AVAILABLE"],["commit_capability_claim","Adds a capability claim to the local chain"],["commit_capability_grant","Adds a capability grant to the local chain"],["commit_entry","Attempts to commit an entry to the local source chain. The entry will also be checked against the defined validation rules for that entry type. If the entry type is defined as public, it will also be published to the DHT. Returns either an address of the committed entry, or an error. # Examples ```rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # #[macro_use] # extern crate holochain_json_derive; # use hdk::error::ZomeApiResult; # use holochain_json_api::json::JsonString; # use holochain_json_api::error::JsonError; # use holochain_core_types::error::HolochainError; # use holochain_core_types::entry::entry_type::AppEntryType; # use holochain_core_types::entry::Entry; # use holochain_persistence_api::cas::content::Address; # use holochain_core_types::error::RibosomeEncodingBits;"],["commit_entry_result","Attempts to commit an entry to your local source chain. The entry will have to pass the defined validation rules for that entry type. If the entry type is defined as public, will also publish the entry to the DHT."],["debug","Prints a string through the stdout of the running Conductor, and also writes that string to the logger in the execution context # Examples ```rust # #[macro_use] # extern crate hdk; # use hdk::error::ZomeApiResult;"],["decrypt","decrypts a string payload using the agent's private key. Returns the message as a string. # Examples `rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # #[macro_use] # extern crate holochain_json_derive; # use hdk::holochain_json_api::json::JsonString; # use holochain_core_types::error::HolochainError; # use holochain_core_types::signature::{Provenance, Signature}; # use hdk::error::ZomeApiResult; # fn main() { pub fn handle_sign_message(payload: String) -> ZomeApiResult<Signature> { hdk::decrypt(payload).map(Signature::from) } # }`"],["emit_signal","Emits a signal that listeners can receive. (Status: MVP)"],["encrypt","encrypts a string payload using the agent's private key. Returns the message as a string. # Examples `rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # #[macro_use] # extern crate holochain_json_derive; # use hdk::holochain_json_api::json::JsonString; # use holochain_core_types::error::HolochainError; # use holochain_core_types::signature::{Provenance, Signature}; # use hdk::error::ZomeApiResult; # fn main() { pub fn handle_encrypt_message(message: String) -> ZomeApiResult<Signature> { hdk::encrypt(message).map(Signature::from) } # }`"],["entry_address","Reconstructs an address of the given entry data. This is the same value that would be returned if `entry_type_name` and `entry_value` were passed to the commit_entry function and by which it would be retrievable from the DHT using get_entry. This is often used to reconstruct an address of a `base` argument when calling get_links. # Examples ```rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # #[macro_use] # extern crate holochain_json_derive; # use hdk::error::ZomeApiResult; # use holochain_json_api::error::JsonError; # use holochain_json_api::json::JsonString; # use holochain_core_types::error::HolochainError; # use holochain_core_types::entry::entry_type::AppEntryType; # use holochain_core_types::entry::AppEntryValue; # use holochain_core_types::entry::Entry; # use holochain_persistence_api::cas::content::Address; # fn main() {"],["entry_type_properties",""],["get_entry","Retrieves latest version of an entry from the local chain or the DHT, by looking it up using the specified address. Returns None if no entry exists at the specified address or if the entry's status is DELETED.  Note that if the entry was updated, the value retrieved may be of the updated entry which will have a different hash value.  If you need to get the original value whatever the status, use get_entry_initial, or if you need to know the address of the updated entry use get_entry_result # Examples `rust # extern crate hdk; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # use hdk::error::ZomeApiResult; # use holochain_core_types::entry::Entry; # use holochain_json_api::json::JsonString; # use holochain_persistence_api::cas::content::Address; # fn main() { pub fn handle_get_post(post_address: Address) -> ZomeApiResult<Option<Entry>> { // get_entry returns a Result<Option<T>, ZomeApiError> // where T is the type that you used to commit the entry, in this case a Blog // It's a ZomeApiError if something went wrong (i.e. wrong type in deserialization) // Otherwise its a Some(T) or a None hdk::get_entry(&post_address) } # }`"],["get_entry_history","Return an EntryHistory filled with all the versions of the entry from the version at the specified address to the latest. Returns None if no entry exists at the specified address."],["get_entry_initial","Returns the Entry at the exact address specified, whatever its status. Returns None if no entry exists at the specified address."],["get_entry_result","Retrieves an entry and its metadata from the local chain or the DHT, by looking it up using the specified address. The data returned is configurable with the GetEntryOptions argument."],["get_links","Helper function for get_links. Returns a vector with the default return results."],["get_links_and_load","Helper function for get_links. Returns a vector of the entries themselves"],["get_links_result","Retrieves data about entries linked to a base address with a given type and tag. This is the most general version of the various get_links helpers (such as get_links_and_load) and can return the linked addresses, entries, headers and sources. Also supports CRUD status_request. The data returned is configurable with the GetLinksOptions to specify links options and GetEntryOptions argument wto specify options when loading the entries. # Examples ```rust # extern crate hdk; # extern crate holochain_core_types; # extern crate holochain_wasm_utils; # extern crate holochain_persistence_api; # use hdk::error::ZomeApiResult; # use holochain_persistence_api::cas::content::Address; # use holochain_wasm_utils::api_serialization::{ #    get_entry::{GetEntryOptions, GetEntryResult}, #    get_links::GetLinksOptions}; # use holochain_core_types::link::LinkMatch;"],["get_links_with_options","Consumes four values; the address of an entry get get links from (the base), the type of the links to be retrieved, an optional tag to match, and an options struct for selecting what meta data and crud status links to retrieve. Note: the type is intended to describe the relationship between the `base` and other entries you wish to lookup. This function returns a list of addresses of other entries which matched as being linked by the given `type`. If the `tag` is not None it will return only links that match the tag exactly. If the tag parameter is None it will return all links of the given type regardless of their tag. Links are created using the Zome API function link_entries. If you also need the content of the entry consider using one of the helper functions: get_links_result or get_links_and_load # Examples ```rust # extern crate hdk; # extern crate holochain_core_types; # extern crate holochain_wasm_utils; # extern crate holochain_json_api; # extern crate holochain_persistence_api; # use holochain_json_api::json::JsonString; # use holochain_persistence_api::cas::content::Address; # use hdk::error::ZomeApiResult; # use holochain_wasm_utils::api_serialization::get_links::{GetLinksResult, GetLinksOptions}; # use holochain_core_types::link::LinkMatch;"],["keystore_derive_key","Creates a new derived key secret in the keystore derived from on a previously defined seed. Accepts two arguments: the keystore ID of the previously defined seed, and a keystore ID for the newly derived key."],["keystore_derive_seed","Creates a new derived seed secret in the keystore, derived from a previously defined seed. Accepts two arguments: the keystore ID of the previously defined seed, and a keystore ID for the newly derived seed."],["keystore_get_public_key","Returns the public key of a key secret Accepts one argument: the keystore ID of the desired public key. Fails if the id is a Seed secret."],["keystore_list",""],["keystore_new_random","Creates a new random \"root\" Seed secret in the keystore"],["keystore_sign","Signs a payload using a private key from the keystore. Accepts one argument: the keystore ID of the desired private key."],["link_entries","Adds a named, tagged, directed link between two entries on the DHT. Consumes four values, two of which are the addresses of entries, and two of which are strings used to describe the link."],["property",""],["query","Returns a list of entries from your local source chain that match a given entry type name or names."],["query_result",""],["remove_entry","Commit a DeletionEntry to your local source chain that marks an entry as 'deleted' by setting its status metadata to `Deleted` and adding the DeleteEntry's address in the deleted entry's metadata, which will be used by validation routes."],["remove_link","Commits a LinkRemove entry to your local source chain that marks a link as 'deleted' by setting its status metadata to `Deleted` which gets published to the DHT. Consumes four values, two of which are the addresses of entries, and two of which are strings that describe the link type and its tag. Both must match exactly to remove a link. # Examples ```rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # #[macro_use] # extern crate holochain_json_derive; # use holochain_json_api::json::JsonString; # use holochain_json_api::error::JsonError; # use holochain_core_types::error::HolochainError; # use holochain_core_types::entry::entry_type::AppEntryType; # use holochain_core_types::entry::Entry; # use holochain_persistence_api::cas::content::Address; # use hdk::AGENT_ADDRESS; # use hdk::error::ZomeApiResult; # use hdk::holochain_wasm_utils::api_serialization::get_entry::GetEntryOptions; # use hdk::holochain_wasm_utils::api_serialization::get_entry::StatusRequestKind; # fn main() {"],["send","Sends a node-to-node message to the given agent, specified by their address.  Addresses of agents can be accessed using hdk::AGENT_ADDRESS.  This works in conjunction with the `receive` callback that has to be defined in the  define_zome! macro."],["sign","Signs a string payload using the agent's private key. Returns the signature as a string. # Examples `rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # #[macro_use] # extern crate holochain_json_derive; # use holochain_json_api::json::JsonString; # use holochain_core_types::error::HolochainError; # use holochain_core_types::signature::{Provenance, Signature}; # use hdk::error::ZomeApiResult; # fn main() { pub fn handle_sign_message(message: String) -> ZomeApiResult<Signature> { hdk::sign(message).map(Signature::from) } # }`"],["sign_one_time","Signs a vector of payloads with a private key that is generated and shredded. Returns the signatures of the payloads and the public key that can be used to verify the signatures. # Examples `rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # #[macro_use] # extern crate holochain_json_derive; # use holochain_json_api::json::JsonString; # use holochain_core_types::error::HolochainError; # use holochain_core_types::signature::{Provenance, Signature}; # use hdk::error::ZomeApiResult; # use hdk::holochain_wasm_utils::api_serialization::sign::{OneTimeSignArgs, SignOneTimeResult}; # fn main() { pub fn handle_one_time_sign(key_id: String, message: String) -> ZomeApiResult<Signature> { hdk::sign(message).map(Signature::from) } # }`"],["sleep","Lets the DNA runtime sleep for the given duration. # Examples ```rust # #[macro_use] # extern crate hdk; # use hdk::error::ZomeApiResult; # use std::time::Duration;"],["start_bundle","NOT YET AVAILABLE"],["update_agent","NOT YET AVAILABLE"],["update_entry","Commit an entry to your local source chain that \"updates\" a previous entry, meaning when getting the previous entry, the updated entry will be returned. `update_entry` sets the previous entry's status metadata to `Modified` and adds the updated entry's address in the previous entry's metadata. The updated entry will hold the previous entry's address in its header, which will be used by validation routes."],["verify_signature","Verifies a provenance (public key, signature) against a payload # Examples `rust # #![feature(try_from)] # extern crate hdk; # extern crate serde_json; # #[macro_use] # extern crate serde_derive; # extern crate holochain_core_types; # extern crate holochain_persistence_api; # extern crate holochain_json_api; # #[macro_use] # extern crate holochain_json_derive; # use holochain_json_api::json::JsonString; # use holochain_core_types::error::HolochainError; # use holochain_core_types::signature::Provenance; # use hdk::error::ZomeApiResult; # fn main() { pub fn handle_verify_message(message: String, provenance: Provenance) -> ZomeApiResult<bool> { hdk::verify_signature(provenance, message) } # }`"]],"static":[["G_MEM_STACK","Internal global for memory usage"]],"struct":[["AGENT_ADDRESS","The hash of your public key. This is your node address on the DHT. It can be used for node-to-node messaging with `send` and `receive` functions."],["AGENT_ID_STR","The identity string used when the chain was first initialized."],["AGENT_INITIAL_HASH","The hash of the first identity entry on your chain (The second entry on your chain). This is your peer's identity on the DHT."],["CAPABILITY_REQ","The CapabilityRequest under which this wasm function is executing"],["DNA_ADDRESS","The address of the DNA the Zome is embedded within. This is often useful as a fixed value that is known by all participants running the DNA."],["DNA_NAME","The `name` property as taken from the DNA."],["EntryValidationArgs",""],["GetEntryMask",""],["LinkValidationArgs",""],["LinkValidationPackageArgs",""],["PROPERTIES","The json string from the DNA top level properties field. Deserialize this into a serde_json::Value or a zome specific struct to access the fields"],["PUBLIC_TOKEN","The Address of the public token (if any)"]]});