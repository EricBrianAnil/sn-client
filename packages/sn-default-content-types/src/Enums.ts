/**
 *
 * Module for enums types defined in SenseNet helps you to use enums with dot notation.
 *
 * This module is autogenerated from Sense/Net metadata (/Odata/$metadata)
 *
 * ```
 *
 * import {Style} from "@sensenet/default-content-types";
 *
 * let car: Car = {
 *  Id: 1,
 *  Name: 'MyCar',
 *  DisplayName: 'My Car',
 *  Style: Style.Cabrio
 * };
 * ```
 */ /** */

 // tslint:disable:naming-convention

export enum VersioningMode {
     Option0 = "0",
     Option1 = "1",
     Option2 = "2",
     Option3 = "3",
}
export enum InheritableVersioningMode {
     Option0 = "0",
     Option1 = "1",
     Option2 = "2",
     Option3 = "3",
}
export enum ApprovingMode {
     Option0 = "0",
     Option1 = "1",
     Option2 = "2",
}
export enum InheritableApprovingMode {
     Option0 = "0",
     Option1 = "1",
     Option2 = "2",
}
export enum SavingState {
     Finalized = "0",
     Creating = "1",
     Modifying = "2",
     ModifyingLocked = "3",
}
export enum GroupAttachments {
     email = "email",
     root = "root",
     subject = "subject",
     sender = "sender",
}
export enum EnableAutofilters {
     Default = "0",
     Enabled = "1",
     Disabled = "2",
}
export enum EnableLifespanFilter {
     Default = "0",
     Enabled = "1",
     Disabled = "2",
}
export enum Language {
     En = "en",
     Hu = "hu",
}
export enum MemoType {
     generic = "generic",
     iso = "iso",
     iaudit = "iaudit",
}
export enum Priority {
     Option0 = "1",
     Option1 = "2",
     Option2 = "3",
}
export enum Status {
     pending = "pending",
     active = "active",
     completed = "completed",
     deferred = "deferred",
     waiting = "waiting",
}
export enum QueryType {
     Public = "Public",
     Private = "Private",
}
export enum Gender {
     Option0 = "...",
     Female = "Female",
     Male = "Male",
}
export enum MaritalStatus {
     Option0 = "...",
     Single = "Single",
     Married = "Married",
}
