var displayName, exportObj, sortWithoutQuotes, _base,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __hasProp = {}.hasOwnProperty;

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

exportObj.unreleasedExpansions = [];

exportObj.isReleased = function(data) {
  var source, _i, _len, _ref;
  _ref = data.sources;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (__indexOf.call(exportObj.unreleasedExpansions, source) < 0) {
      return true;
    }
  }
  return false;
};

String.prototype.canonicalize = function() {
  return this.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s+/g, '-');
};

exportObj.basicCardData = function() {
  return {
    ships: {
      "X-Wing": {
        name: "X-Wing",
        xws: "T-65 X-wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 2,
        actions: ["Focus", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Servomotor S-Foils"]
      },
      "Y-Wing": {
        name: "Y-Wing",
        xws: "BTL-A4 Y-wing".canonicalize(),
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 1,
        hull: 6,
        shields: 2,
        actions: ["Focus", "Lock", "R-Barrel Roll", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 3, 0, 0, 3]]
      },
      "A-Wing": {
        name: "A-Wing",
        xws: "RZ-1 A-wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        chassis: "Vectored Thrusters",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "YT-1300": {
        name: "YT-1300",
        xws: "Modified YT-1300 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attackdt: 3,
        agility: 1,
        hull: 8,
        shields: 5,
        keyword: ["Freighter"],
        actions: ["Focus", "Lock", "Rotate Arc", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0]],
        base: "Large"
      },
      "Customized YT-1300": {
        name: "Customized YT-1300",
        canonical_name: 'Customized YT-1300'.canonicalize(),
        xws: "Customized YT-1300 Light Freighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attackdt: 2,
        agility: 1,
        hull: 8,
        shields: 3,
        keyword: ["Freighter"],
        actions: ["Focus", "Lock", "Rotate Arc", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0]],
        base: "Large"
      },
      "TIE Fighter": {
        name: "TIE Fighter",
        xws: "TIE/ln Fighter".canonicalize(),
        factions: ["Rebel Alliance", "Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        actions: ["Focus", "Barrel Roll", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3], [0, 0, 2, 0, 0, 0]]
      },
      "TIE Advanced": {
        name: "TIE Advanced",
        xws: "TIE Advanced x1".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 2,
        chassis: "Advanced Targeting Computer",
        actions: ["Focus", "R-> Barrel Roll", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Interceptor": {
        name: "TIE Interceptor",
        icon: "tieinterceptor",
        xws: "TIE/IN Interceptor".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Autothrusters",
        actions: ["Focus", "Barrel Roll", "Boost", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "Firespray-31": {
        name: "Firespray-31",
        xws: "Firespray-class Patrol Craft".canonicalize(),
        factions: ["Scum and Villainy", "Separatist Alliance"],
        attack: 3,
        attackb: 3,
        agility: 2,
        hull: 6,
        shields: 4,
        base: "Medium",
        actions: ["Focus", "Lock", "Boost", "R-Reinforce"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "HWK-290": {
        name: "HWK-290",
        xws: "HWK-290 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        keyword: ["Freighter"],
        actions: ["Focus", "R-> Rotate Arc", "Lock", "R-> Rotate Arc", "Rotate Arc", "R-Boost", "R-Jam"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 1, 1, 1, 0], [2, 2, 1, 2, 2], [3, 2, 1, 2, 3], [0, 0, 2, 0, 0]]
      },
      "Lambda-Class Shuttle": {
        name: "Lambda-Class Shuttle",
        xws: "Lambda-class T-4a Shuttle".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        attackb: 2,
        agility: 1,
        hull: 6,
        shields: 4,
        actions: ["Focus", "Coordinate", "Reinforce", "R-Jam"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 1, 1, 1, 0], [3, 2, 1, 2, 3], [0, 3, 2, 3, 0]],
        base: "Large"
      },
      "B-Wing": {
        name: "B-Wing",
        xws: "A/SF-01 B-wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 1,
        hull: 4,
        shields: 4,
        actions: ["Focus", "R-> Barrel Roll", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 3, 3], [2, 2, 1, 2, 2, 3, 0, 0, 0, 0], [0, 3, 1, 3, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Stabilized S-Foils']
      },
      "TIE Bomber": {
        name: "TIE Bomber",
        xws: "TIE/sa Bomber".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 6,
        shields: 0,
        chassis: "Nimble Bomber",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Lock", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
      },
      "Z-95 Headhunter": {
        name: "Z-95 Headhunter",
        xws: "Z-95-AF4 Headhunter".canonicalize(),
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3]]
      },
      "TIE Defender": {
        name: "TIE Defender",
        xws: "TIE/D Defender".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 4,
        chassis: "Full Throttle",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 0, 1, 3, 0], [3, 2, 1, 2, 3, 3], [2, 2, 1, 2, 2, 0], [0, 0, 1, 0, 0, 2], [0, 0, 1, 0, 0, 0]]
      },
      "E-Wing": {
        name: "E-Wing",
        xws: "E-wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 3,
        chassis: "Experimental Scanners",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Lock", "Boost", "R-> Lock"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "TIE Phantom": {
        name: "TIE Phantom",
        xws: "TIE/ph Phantom".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 2,
        chassis: "Stygium Array",
        actions: ["Focus", "Evade", "Barrel Roll", "Cloak"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 2, 0, 2, 2, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3]]
      },
      "YT-2400": {
        name: "YT-2400",
        xws: "YT-2400 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attackdt: 4,
        agility: 2,
        hull: 6,
        shields: 4,
        keyword: ["Freighter"],
        chassis: "Sensor Blindspot",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Rotate Arc"],
        base: "Large",
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 0], [2, 2, 2, 2, 2, 0], [0, 0, 2, 0, 0, 3]]
      },
      "VT-49 Decimator": {
        name: "VT-49 Decimator",
        xws: "VT-49 Decimator".canonicalize(),
        factions: ["Galactic Empire"],
        attackdt: 3,
        agility: 0,
        hull: 12,
        shields: 4,
        actions: ["Focus", "Lock", "Reinforce", "Rotate Arc", "R-Coordinate"],
        base: "Large",
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0], [2, 2, 1, 2, 2, 0], [2, 2, 2, 2, 2, 0], [0, 0, 2, 0, 0, 0]]
      },
      "StarViper": {
        name: "StarViper",
        xws: "StarViper-class Attack Platform".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 1,
        chassis: "Microthrusters",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [0, 2, 1, 2, 0, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "M3-A Interceptor": {
        name: "M3-A Interceptor",
        xws: "M3-A Interceptor".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        chassis: "Weapon Hardpoint",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0], [2, 2, 1, 2, 2, 0], [0, 2, 1, 2, 0, 3], [0, 0, 2, 0, 0, 0], [0, 0, 2, 0, 0, 3]]
      },
      "Aggressor": {
        name: "Aggressor",
        xws: "Aggressor Assault Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 5,
        shields: 3,
        chassis: "Advanced Droid Brain",
        actions: ["Calculate", "Evade", "Lock", "Boost"],
        base: "Medium",
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [0, 1, 1, 1, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "YV-666": {
        name: "YV-666",
        xws: "YV-666 Light Freighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attackf: 3,
        agility: 1,
        hull: 9,
        shields: 3,
        base: "Large",
        actions: ["Focus", "Reinforce", "Lock"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [0, 1, 1, 1, 0, 0], [3, 2, 1, 2, 3, 0], [2, 2, 1, 2, 2, 0], [0, 0, 2, 0, 0, 0]]
      },
      "Kihraxz Fighter": {
        name: "Kihraxz Fighter",
        xws: "Kihraxz Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 2,
        hull: 5,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 3, 3], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "K-Wing": {
        name: "K-Wing",
        xws: "BTL-S8 K-wing".canonicalize(),
        factions: ["Rebel Alliance"],
        attackdt: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        base: "Medium",
        actions: ["Focus", "Lock", "Slam", "Rotate Arc", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [0, 2, 2, 2, 0, 0]]
      },
      "TIE Punisher": {
        name: "TIE Punisher",
        xws: "TIE/ca Punisher".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        base: "Medium",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Boost", "R-> Lock", "Reload"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 0, 0, 0, 3]]
      },
      "VCX-100": {
        name: "VCX-100",
        xws: "VCX-100 Light Freighter".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 4,
        agility: 0,
        hull: 10,
        shields: 4,
        base: "Large",
        keyword: ["Freighter"],
        chassis: "Tail Gun",
        actions: ["Focus", "Lock", "Reinforce"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0], [2, 1, 1, 1, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 2, 0, 0, 3]]
      },
      "Attack Shuttle": {
        name: "Attack Shuttle",
        xws: "Attack Shuttle".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 1,
        chassis: "Locked and Loaded",
        actions: ["Focus", "Evade", "Barrel Roll", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 2, 0, 0, 3]]
      },
      "TIE Advanced Prototype": {
        name: "TIE Advanced Prototype",
        xws: "TIE Advanced v1".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "G-1A Starfighter": {
        name: "G-1A Starfighter",
        xws: "G-1A Starfighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 5,
        shields: 4,
        base: "Medium",
        actions: ["Focus", "Lock", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [3, 1, 1, 1, 3, 0], [2, 2, 1, 2, 2, 3], [0, 3, 2, 3, 0, 0], [0, 0, 3, 0, 0, 3]]
      },
      "JumpMaster 5000": {
        name: "JumpMaster 5000",
        xws: "JumpMaster 5000".canonicalize(),
        factions: ["Scum and Villainy"],
        base: "Large",
        attackt: 2,
        agility: 2,
        hull: 6,
        shields: 3,
        actions: ["Focus", "R-> Rotate Arc", "Lock", "R-> Rotate Arc", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 2, 3, 0, 0, 0], [2, 1, 1, 2, 3, 0, 0, 0], [0, 1, 1, 2, 0, 0, 3, 0], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "ARC-170": {
        name: "ARC-170",
        xws: "ARC-170 Starfighter".canonicalize(),
        factions: ["Rebel Alliance", "Galactic Republic"],
        attack: 3,
        attackb: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        base: "Medium",
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 1, 1, 1, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 3, 0, 0, 3]]
      },
      "Fang Fighter": {
        name: "Fang Fighter",
        xws: "Fang Fighter".canonicalize(),
        factions: ["Galactic Empire", "Rebel Alliance"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 0,
        chassis: "Concordia Faceoff",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 3, 3], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Lancer-Class Pursuit Craft": {
        name: "Lancer-Class Pursuit Craft",
        xws: "Lancer-class Pursuit Craft".canonicalize(),
        factions: ["Scum and Villainy"],
        base: "Large",
        attack: 3,
        attackt: 2,
        agility: 2,
        hull: 8,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [2, 2, 1, 2, 2, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0], [0, 0, 2, 0, 0, 3]]
      },
      "Quadjumper": {
        name: "Quadjumper",
        xws: "Quadrijet Transfer Spacetug".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        chassis: "Spacetug Tractor Array",
        actions: ["Focus", "R-Evade", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 3, 0, 3], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0, 0, 3, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "U-Wing": {
        name: "U-Wing",
        xws: "UT-60D U-wing".canonicalize(),
        factions: ["Rebel Alliance"],
        base: "Medium",
        attack: 3,
        agility: 2,
        hull: 5,
        shields: 3,
        actions: ["Focus", "Lock", "R-Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 1, 1, 1, 0], [2, 1, 1, 1, 2], [0, 2, 2, 2, 0], [0, 0, 2, 0, 0]],
        autoequip: ["Pivot Wing"]
      },
      "TIE Striker": {
        name: "TIE Striker",
        xws: "TIE/sk Striker".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 0,
        chassis: "Adaptive Ailerons",
        actions: ["Focus", "Evade", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 3, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3], [0, 2, 1, 2, 0, 0, 0, 0]]
      },
      "Auzituck Gunship": {
        name: "Auzituck Gunship",
        xws: "Auzituck Gunship".canonicalize(),
        factions: ["Rebel Alliance"],
        attackf: 3,
        agility: 1,
        hull: 6,
        shields: 2,
        actions: ["Focus", "R-Barrel Roll", "Reinforce"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "Scurrg H-6 Bomber": {
        name: "Scurrg H-6 Bomber",
        xws: "Scurrg H-6 Bomber".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 6,
        shields: 4,
        base: "Medium",
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Aggressor": {
        name: "TIE Aggressor",
        xws: "TIE/ag Aggressor".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Alpha-Class Star Wing": {
        name: "Alpha-Class Star Wing",
        xws: "Alpha-class Star Wing".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 3,
        actions: ["Focus", "Lock", "Slam", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0]]
      },
      "M12-L Kimogila Fighter": {
        name: "M12-L Kimogila Fighter",
        xws: "M12-L Kimogila Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 7,
        shields: 2,
        base: "Medium",
        chassis: "Dead to Rights",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 0], [0, 0, 0, 0, 0, 3]]
      },
      "Sheathipede-Class Shuttle": {
        name: "Sheathipede-Class Shuttle",
        xws: "Sheathipede-class Shuttle".canonicalize(),
        factions: ["Rebel Alliance"],
        attack: 2,
        attackb: 2,
        agility: 2,
        hull: 4,
        shields: 1,
        chassis: "Comms Shuttle",
        actions: ["Focus", "Coordinate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Reaper": {
        name: "TIE Reaper",
        xws: "TIE Reaper".canonicalize(),
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 1,
        hull: 6,
        shields: 2,
        base: "Medium",
        chassis: "Controlled Ailerons",
        actions: ["Focus", "Evade", "Jam", "R-Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 3, 3], [3, 2, 1, 2, 3, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0]]
      },
      "Escape Craft": {
        name: "Escape Craft",
        xws: "Escape Craft".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        chassis: "Co-Pilot",
        actions: ["Focus", "Barrel Roll", "R-Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0], [0, 2, 2, 2, 0, 3, 0, 0]]
      },
      "T-70 X-Wing": {
        name: "T-70 X-Wing",
        xws: "T-70 X-wing".canonicalize(),
        factions: ["Resistance"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 3,
        chassis: "Weapon Hardpoint",
        actions: ["Focus", "Lock", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Integrated S-Foils"]
      },
      "RZ-2 A-Wing": {
        name: "RZ-2 A-Wing",
        xws: "RZ-2 A-wing".canonicalize(),
        factions: ["Resistance"],
        attackt: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        chassis: "Refined Gyrostabilizers",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "TIE/FO Fighter": {
        name: "TIE/FO Fighter",
        xws: "TIE/fo Fighter".canonicalize(),
        factions: ["First Order"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 3, 3], [2, 2, 1, 2, 2, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "TIE/VN Silencer": {
        name: "TIE/VN Silencer",
        xws: "TIE/vn Silencer".canonicalize(),
        factions: ["First Order"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 2,
        chassis: "Autothrusters",
        actions: ["Focus", "Boost", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/SF Fighter": {
        name: "TIE/SF Fighter",
        xws: "TIE/sf Fighter".canonicalize(),
        factions: ["First Order"],
        attack: 2,
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 3,
        chassis: "Heavy Weapon Turret",
        actions: ["Focus", "> Rotate Arc", "Evade", "> Rotate Arc", "Lock", "> Rotate Arc", "Barrel Roll", "> Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Upsilon-Class Command Shuttle": {
        name: "Upsilon-Class Command Shuttle",
        xws: "Upsilon-class command shuttle".canonicalize(),
        factions: ["First Order"],
        attack: 4,
        agility: 1,
        hull: 6,
        shields: 6,
        chassis: "Linked Battery",
        actions: ["Focus", "Lock", "Reinforce", "Coordinate", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        base: "Large"
      },
      "MG-100 StarFortress": {
        name: "MG-100 StarFortress",
        xws: "MG-100 StarFortress".canonicalize(),
        factions: ["Resistance"],
        attack: 3,
        attackdt: 2,
        agility: 1,
        hull: 9,
        shields: 3,
        actions: ["Focus", "Lock", "Rotate Arc", "Reload"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 3, 2, 3, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        base: "Large"
      },
      "Scavenged YT-1300": {
        name: "Scavenged YT-1300",
        canonical_name: 'Scavenged YT-1300'.canonicalize(),
        xws: "Scavenged YT-1300".canonicalize(),
        factions: ["Resistance"],
        attackdt: 3,
        agility: 1,
        hull: 8,
        shields: 3,
        keyword: ["Freighter"],
        actions: ["Focus", "Lock", "R-Boost", "R-Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 2, 2, 2, 2, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0]],
        base: "Large"
      },
      "Mining Guild TIE Fighter": {
        name: "Mining Guild TIE Fighter",
        xws: "Modified TIE/ln Fighter".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Notched Stabilizers",
        actions: ["Focus", "Barrel Roll", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 0], [0, 0, 3, 0, 0, 0]]
      },
      "V-19 Torrent": {
        name: "V-19 Torrent",
        xws: "V-19 Torrent Starfighter".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 3, 1, 3, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Delta-7 Aethersprite": {
        name: "Delta-7 Aethersprite",
        xws: "Delta-7 Aethersprite".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        chassis: "Fine-Tuned Controls",
        actions: ["Focus", "F-Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Delta-7b Aethersprite": {
        name: "Delta-7b Aethersprite",
        icon: "delta7aethersprite",
        xws: "Delta-7b Aethersprite".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 3,
        chassis: "Fine-Tuned Controls",
        actions: ["Focus", "F-Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Sith Infiltrator": {
        name: "Sith Infiltrator",
        xws: "Sith Infiltrator".canonicalize(),
        factions: ["Separatist Alliance"],
        attack: 3,
        agility: 1,
        hull: 6,
        base: "Large",
        shields: 4,
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Vulture-class Droid Fighter": {
        name: "Vulture-class Droid Fighter",
        xws: "Vulture-class Droid Fighter".canonicalize(),
        factions: ["Separatist Alliance"],
        attack: 2,
        agility: 2,
        hull: 3,
        shields: 0,
        chassis: "Networked Calculations",
        actions: ["Calculate", "Lock", "Barrel Roll", "R-> Calculate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 3, 0, 0, 0, 0], [1, 2, 1, 2, 1, 0, 0, 0, 3, 3], [2, 3, 1, 3, 2, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Grappling Struts']
      },
      "Belbullab-22 Starfighter": {
        name: "Belbullab-22 Starfighter",
        xws: "Belbullab-22 Starfighter".canonicalize(),
        factions: ["Separatist Alliance"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 2,
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 0, 2, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 3, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Naboo Royal N-1 Starfighter": {
        name: "Naboo Royal N-1 Starfighter",
        xws: "Naboo Royal N-1 Starfighter".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        chassis: "Full Throttle",
        actions: ["Focus", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Hyena-Class Droid Bomber": {
        name: "Hyena-Class Droid Bomber",
        xws: "Hyena-Class Droid Bomber".canonicalize(),
        factions: ["Separatist Alliance"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        chassis: "Networked Calculations",
        actions: ["Calculate", "Lock", "Barrel Roll", "R-> Lock", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 3, 2, 3, 2, 0, 0, 0, 0, 0], [1, 2, 1, 2, 1, 3, 0, 0, 3, 3], [2, 0, 1, 0, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Landing Struts']
      },
      "Resistance Transport Pod": {
        name: "Resistance Transport Pod",
        xws: "Resistance Transport Pod".canonicalize(),
        factions: ["Resistance"],
        attack: 2,
        agility: 2,
        hull: 3,
        shields: 1,
        actions: ["Focus", "R-Lock", "R-Barrel Roll", "R-Jam"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 3, 2, 3, 0, 3, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Resistance Transport": {
        name: "Resistance Transport",
        xws: "Resistance Transport".canonicalize(),
        factions: ["Resistance"],
        attack: 2,
        agility: 1,
        hull: 5,
        shields: 3,
        actions: ["Focus", "Lock", "R-Coordinate", "R-Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 3], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0], [0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Nantex-Class Starfighter": {
        name: "Nantex-Class Starfighter",
        xws: "Nantex-Class Starfighter".canonicalize(),
        factions: ["Separatist Alliance"],
        attackbull: 3,
        attackt: 2,
        agility: 3,
        hull: 4,
        shields: 0,
        chassis: "Pinpoint Tractor Array",
        actions: ["Focus", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "BTL-B Y-Wing": {
        name: "BTL-B Y-Wing",
        xws: "BTL-B Y-Wing".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 1,
        hull: 5,
        shields: 3,
        chassis: "Plated Hull",
        actions: ["Focus", "Lock", "R-Barrel Roll", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 3, 0, 0, 3], [0, 0, 0, 0, 0, 0]]
      },
      "Fireball": {
        name: "Fireball",
        xws: "Fireball".canonicalize(),
        factions: ["Resistance"],
        attack: 2,
        agility: 2,
        hull: 6,
        shields: 0,
        chassis: "Explosion with Wings",
        actions: ["Focus", "Evade", "Barrel Roll", "Slam"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/Ba Interceptor": {
        name: "TIE/Ba Interceptor",
        xws: "TIE/Ba Interceptor".canonicalize(),
        factions: ["First Order"],
        attack: 3,
        agility: 3,
        hull: 2,
        shields: 2,
        chassis: "Fine-Tuned Thrusters",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Xi-class Light Shuttle": {
        name: "Xi-class Light Shuttle",
        xws: "Xi-class Light Shuttle".canonicalize(),
        factions: ["First Order"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 2,
        base: "Medium",
        actions: ["Focus", "R-Lock", "R-Coordinate", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "HMP Droid Gunship": {
        name: "HMP Droid Gunship",
        xws: "HMP Droid Gunship".canonicalize(),
        factions: ["Separatist Alliance"],
        attackf: 2,
        agility: 1,
        hull: 5,
        shields: 3,
        chassis: "Networked Aim",
        actions: ["Calculate", "Lock", "R-Barrel Roll", "Reload", "R-> Calculate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 3, 1, 3, 0, 0, 0, 0, 0, 0], [1, 2, 1, 2, 1, 0, 0, 0, 0, 0], [2, 3, 2, 3, 2, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Repulsorlift Stabilizers']
      },
      "LAAT/i Gunship": {
        name: "LAAT/i Gunship",
        xws: "LAAT/i Gunship".canonicalize(),
        factions: ["Galactic Republic"],
        attackdt: 2,
        agility: 1,
        hull: 8,
        shields: 2,
        base: "Medium",
        chassis: "Fire Convergence",
        actions: ["Focus", "Lock", "Rotate Arc", "R-Reinforce", "Reload"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/rb Heavy": {
        name: "TIE/rb Heavy",
        xws: "TIE/rb Heavy".canonicalize(),
        factions: ["Galactic Empire"],
        attackt: 2,
        agility: 1,
        hull: 8,
        shields: 0,
        base: "Medium",
        chassis: "Rotating Cannons",
        actions: ["Focus", "Reinforce", "Lock", "R-Barrel Roll", "Rotate Arc", "R-> Calculate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Droid Tri-Fighter": {
        name: "Droid Tri-Fighter",
        xws: "Droid Tri-Fighter".canonicalize(),
        factions: ["Separatist Alliance"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Networked Calculations",
        actions: ["Calculate", "Evade", "Lock", "Barrel Roll", "R-> Evade", "Boost", "R-> Calculate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 3, 3], [1, 2, 1, 2, 1, 0, 0, 0, 0, 0], [1, 2, 1, 2, 1, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Nimbus-class V-Wing": {
        name: "Nimbus-class V-Wing",
        xws: "Nimbus-class V-Wing".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        keyword: ["TIE"],
        chassis: "Twin Ion Engines",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Boost", "R-> Lock"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 3, 0, 3, 2, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 3, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Eta-2 Actis": {
        name: "Eta-2 Actis",
        xws: "Eta-2 Actis".canonicalize(),
        factions: ["Galactic Republic"],
        attackbull: 3,
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Intuitive Controls",
        actions: ["Focus", "Evade", "F-Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 4, 4], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Syliure-class Hyperspace Ring": {
        name: "Syliure-class Hyperspace Ring",
        xws: "Syliure-class Hyperspace Ring".canonicalize(),
        factions: ["Galactic Republic"],
        agility: 1,
        hull: 1,
        shields: 2,
        actions: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "BTA-NR2 Y-Wing": {
        name: "BTA-NR2 Y-Wing",
        xws: "BTA-NR2 Y-Wing".canonicalize(),
        factions: ["Resistance"],
        attack: 2,
        agility: 1,
        hull: 4,
        shields: 3,
        chassis: "Intuitive Interface",
        actions: ["Focus", "R-Lock", "R-Barrel Roll", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 1, 2, 3, 0], [0, 0, 3, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
      },
      "TIE/WI Whisper": {
        name: "TIE/WI Whisper",
        xws: "TIE/Wi Whisper Modified Interceptor".canonicalize(),
        factions: ["First Order"],
        attackbull: 3,
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        chassis: "Heavy Weapon Turret",
        actions: ["Focus", "> Rotate Arc", "Evade", "Lock", "Barrel Roll", "> Rotate Arc", "Boost", "> Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Enhanced Jamming Suite"]
      },
      "TIE/Se Bomber": {
        name: "TIE/Se Bomber",
        xws: "TIE/Se Bomber".canonicalize(),
        factions: ["First Order"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 2,
        chassis: "Pursuit Thrusters",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Lock", "R-Boost", "Reload", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Gauntlet Fighter": {
        name: "Gauntlet Fighter",
        xws: "Gauntlet Fighter".canonicalize(),
        factions: ["Rebel Alliance", "Galactic Empire", "Scum and Villainy", "Galactic Republic", "Separatist Alliance"],
        attack: 3,
        attackb: 2,
        agility: 2,
        hull: 9,
        shields: 2,
        base: "Large",
        actions: ["Focus", "R-Reinforce", "Lock", "R-Coordinate"],
        autoequip: ["Swivel Wing"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "ST-70 Assault Ship": {
        name: "ST-70 Assault Ship",
        xws: "ST-70 Assault Ship".canonicalize(),
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 2,
        hull: 7,
        shields: 2,
        base: "Medium",
        actions: ["Focus", "Evade", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Clone Z-95 Headhunter": {
        name: "Clone Z-95 Headhunter",
        xws: "Clone Z-95 Headhunter".canonicalize(),
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        chassis: "Versatile Frame",
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3]]
      },
      "Rogue-class Starfighter": {
        name: "Rogue-class Starfighter",
        xws: "Rogue-class Starfighter".canonicalize(),
        factions: ["Separatist Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 2,
        chassis: "Dead to Rights",
        actions: ["Focus", "R-> Boost", "Focus", "R-> Barrel Roll", "Evade", "R-> Barrel Roll", "Lock", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 3, 3], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "CR90 Corellian Corvette": {
        name: "CR90 Corellian Corvette",
        xws: "CR90 Corellian Corvette".canonicalize(),
        icon: "cr90corvette",
        factions: ["Galactic Republic", "Rebel Alliance"],
        base: "Huge",
        attackl: 4,
        attackr: 4,
        agility: 0,
        hull: 18,
        shields: 7,
        shieldrecurr: 2,
        energy: 7,
        energyrecurr: 2,
        actions: ["Focus", "Reinforce", "Lock", "R-Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 2, 2, 2, 0], [0, 1, 1, 1, 0], [0, 3, 1, 3, 0], [0, 0, 3, 0, 0], [0, 0, 3, 0, 0]]
      },
      "Raider-class Corvette": {
        name: "Raider-class Corvette",
        xws: "Raider-class Corvette".canonicalize(),
        factions: ["Galactic Empire", "First Order"],
        base: "Huge",
        attackf: 4,
        agility: 0,
        hull: 20,
        shields: 8,
        shieldrecurr: 2,
        energy: 6,
        energyrecurr: 2,
        actions: ["Focus", "Reinforce", "Lock", "Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 1, 2, 1, 0], [0, 2, 1, 2, 0], [0, 3, 1, 3, 0], [0, 0, 2, 0, 0], [0, 0, 3, 0, 0]]
      },
      "GR-75 Medium Transport": {
        name: "GR-75 Medium Transport",
        xws: "GR-75 Medium Transport".canonicalize(),
        factions: ["Rebel Alliance", "Resistance"],
        base: "Huge",
        attack: 2,
        agility: 0,
        hull: 12,
        shields: 3,
        shieldrecurr: 1,
        energy: 4,
        energyrecurr: 1,
        actions: ["Focus", "R-Lock", "Coordinate", "R-Reinforce", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 1, 1, 1, 0], [0, 2, 2, 2, 0], [0, 0, 3, 0, 0], [0, 0, 3, 0, 0]]
      },
      "Gozanti-class Cruiser": {
        name: "Gozanti-class Cruiser",
        xws: "Gozanti-class Cruiser".canonicalize(),
        factions: ["Galactic Empire", "First Order"],
        base: "Huge",
        attack: 3,
        agility: 0,
        hull: 11,
        shields: 5,
        shieldrecurr: 1,
        energy: 3,
        energyrecurr: 1,
        actions: ["Focus", "Reinforce", "Lock", "Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 2, 1, 2, 0], [0, 3, 1, 3, 0], [0, 0, 1, 0, 0], [0, 0, 3, 0, 0]]
      },
      "C-ROC Cruiser": {
        name: "C-ROC Cruiser",
        xws: "C-ROC Cruiser".canonicalize(),
        factions: ["Separatist Alliance", "Scum and Villainy"],
        base: "Huge",
        attack: 3,
        agility: 0,
        hull: 12,
        shields: 4,
        shieldrecurr: 1,
        energy: 4,
        energyrecurr: 1,
        actions: ["Focus", "Reinforce", "Lock", "R-Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 2, 1, 2, 0], [0, 2, 1, 2, 0], [0, 3, 2, 3, 0], [0, 0, 3, 0, 0], [0, 0, 3, 0, 0]]
      },
      "Trident-class Assault Ship": {
        name: "Trident-class Assault Ship",
        xws: "Trident-class Assault Ship".canonicalize(),
        factions: ["Separatist Alliance", "Scum and Villainy"],
        base: "Huge",
        attack: 3,
        agility: 0,
        hull: 10,
        shields: 4,
        shieldrecurr: 1,
        energy: 3,
        energyrecurr: 2,
        actions: ["Focus", "R-Evade", "R-Reinforce", "Lock", "R-Coordinate"],
        maneuvers: [[0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Tractor Tentacles']
      }
    },
    pilotsById: [
      {
        name: "Bandit Squadron Pilot",
        id: 0,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Z-95 Headhunter",
        skill: 1,
        points: 3,
        loadout: 1,
        slots: []
      }, {
        name: "Blue Squadron Escort",
        id: 1,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 2,
        points: 5,
        loadout: 5,
        slots: ["Astromech", "Configuration", "Torpedo"]
      }, {
        name: "Red Squadron Veteran",
        id: 2,
        max_per_squad: 2,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 3,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Astromech", "Torpedo", "Modification", "Configuration"]
      }, {
        name: "Gray Squadron Bomber",
        id: 3,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 2,
        points: 4,
        loadout: 11,
        slots: ["Device", "Device", "Astromech", "Modification"]
      }, {
        name: "Gold Squadron Veteran",
        id: 4,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 3,
        points: 3,
        loadout: 9,
        slots: ["Turret", "Missile", "Gunner", "Astromech", "Modification"],
        skip: true
      }, {
        name: "Jek Porkins",
        id: 5,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 4,
        points: 5,
        loadout: 16,
        slots: ["Talent", "Astromech", "Torpedo", "Modification", "Configuration"],
        skip: true
      }, {
        name: "Academy Pilot",
        id: 6,
        max_per_squad: 2,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 1,
        points: 2,
        loadout: 5,
        slots: ["Modification"]
      }, {
        name: "Obsidian Squadron Pilot",
        id: 7,
        max_per_squad: 3,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 2,
        points: 3,
        loadout: 5,
        slots: ["Modification"]
      }, {
        name: "Black Squadron Ace",
        id: 8,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 3,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Talent", "Modification"],
        skip: true
      }, {
        name: "Iden Versio",
        id: 9,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Fighter",
        skill: 4,
        charge: 1,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Talent", "Cannon", "Missile", "Modification"]
      }, {
        name: "Carida Academy Cadet",
        id: 10,
        faction: "Galactic Empire",
        skill: 1,
        ship: "TIE/rb Heavy",
        points: 5,
        loadout: 17,
        slots: ["Cannon", "Cannon", "Gunner", "Modification", "Configuration"]
      }, {
        name: "Blue Squadron Scout",
        id: 11,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 2,
        points: 4,
        loadout: 7,
        slots: ["Modification", "Configuration", "Gunner", "Crew", "Sensor"]
      }, {
        name: "Heff Tobber",
        id: 12,
        unique: true,
        faction: "Rebel Alliance",
        ship: "U-Wing",
        skill: 2,
        points: 5,
        loadout: 17,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Gunner", "Turret", "Modification", "Configuration"]
      }, {
        name: "Planetary Sentinel",
        id: 13,
        max_per_squad: 2,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 1,
        points: 4,
        loadout: 2,
        slots: []
      }, {
        name: "Black Squadron Scout",
        id: 14,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 3,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Gunner", "Device"]
      }, {
        name: '"Pure Sabacc"',
        id: 15,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Striker",
        skill: 4,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Sensor", "Device", "Modification", "Modification"]
      }, {
        name: "Maarek Stele",
        id: 16,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 5,
        points: 5,
        loadout: 16,
        slots: ["Talent", "Talent", "Sensor", "HardpointShip", "Modification", "Modification"]
      }, {
        name: "Lieutenant Sai",
        id: 17,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-Class Shuttle",
        skill: 3,
        points: 5,
        loadout: 16,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Modification"]
      }, {
        name: "Lieutenant Lorrir",
        id: 18,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Interceptor",
        skill: 3,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Modification", "Configuration"]
      }, {
        name: "Tempest Squadron Pilot",
        id: 19,
        max_per_squad: 2,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 2,
        points: 4,
        loadout: 4,
        slots: ["Sensor", "Modification", "Modification"]
      }, {
        name: "Storm Squadron Ace",
        id: 20,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced",
        skill: 3,
        points: 3,
        loadout: 9,
        slots: ["Talent", "Sensor", "Missile", "Modification"]
      }, {
        name: "Norra Wexley (Y-Wing)",
        id: 21,
        unique: true,
        canonical_name: 'Norra Wexley'.canonicalize(),
        xws: "norrawexley-btla4ywing",
        faction: "Rebel Alliance",
        ship: "Y-Wing",
        skill: 5,
        points: 5,
        loadout: 20,
        slots: ["Talent", "Talent", "Turret", "Torpedo", "Gunner", "Astromech", "Modification", "Device"]
      }, {
        name: "Cavern Angels Zealot",
        id: 22,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        keyword: ["Partisan"],
        skill: 1,
        points: 4,
        loadout: 4,
        slots: ["Illicit"]
      }, {
        name: "Bodica Venj",
        id: 23,
        faction: "Rebel Alliance",
        unique: true,
        ship: "Fang Fighter",
        skill: 4,
        points: 4,
        loadout: 6,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Talent", "Torpedo", "Modification"]
      }, {
        name: "Thane Kyrell",
        id: 24,
        unique: true,
        faction: "Rebel Alliance",
        ship: "X-Wing",
        skill: 5,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Torpedo", "Astromech", "Configuration"]
      }, {
        name: "Joy Rekkoff",
        id: 25,
        unique: true,
        faction: "Galactic Empire",
        ship: "Fang Fighter",
        skill: 4,
        points: 4,
        loadout: 7,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Torpedo", "Modification"]
      }, {
        name: "Clan Wren Volunteer",
        id: 26,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Fang Fighter",
        skill: 3,
        points: 5,
        loadout: 10,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Torpedo", "Modification", "Modification"]
      }, {
        name: "Phoenix Squadron Pilot",
        id: 27,
        max_per_squad: 2,
        faction: "Rebel Alliance",
        ship: "A-Wing",
        skill: 1,
        points: 4,
        loadout: 3,
        slots: ["Talent", "Configuration"]
      }, {
        name: "Major Vynder",
        id: 28,
        unique: true,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 4,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Sensor", "Torpedo", "Modification", "Configuration"]
      }, {
        name: "Captain Oicunn",
        id: 29,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 3,
        points: 7,
        loadout: 19,
        slots: ["Talent", "Talent", "Torpedo", "Crew", "Crew", "Gunner", "Device", "Modification"]
      }, {
        name: "Imperial Super Commando",
        id: 30,
        unique: true,
        faction: "Galactic Empire",
        ship: "Gauntlet Fighter",
        skill: 2,
        points: 7,
        loadout: 10,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Device", "Modification", "Configuration"]
      }
    ],
    upgradesById: [
      {
        name: "Servomotor S-Foils",
        id: 0,
        points: 0,
        slot: "Configuration",
        ship: "X-Wing",
        modifier_func: function(stats) {
          stats.actions.push('Boost');
          stats.actions.push('*Focus');
          return stats.actions.push('R-> Boost');
        }
      }, {
        name: "Maneuver-Assist MGK-300",
        id: 1,
        slot: "Configuration",
        ship: "TIE/rb Heavy",
        faction: "Galactic Empire",
        points: 0,
        modifier_func: function(stats) {
          var turn, _i, _results;
          stats.actions.push('Calculate');
          stats.actions.push('*Barrel Roll');
          stats.actions.push('*R-> Calculate');
          if (stats.maneuvers[3] != null) {
            _results = [];
            for (turn = _i = 1; _i < 4; turn = ++_i) {
              if (stats.maneuvers[3][turn] > 1) {
                _results.push(stats.maneuvers[3][turn]--);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "Target-Assist MGK-300",
        id: 2,
        slot: "Configuration",
        ship: "TIE/rb Heavy",
        faction: "Galactic Empire",
        points: 0,
        modifier_func: function(stats) {
          stats.actions.push('Calculate');
          stats.actions.push('*Rotate Arc');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "R2 Astromech",
        id: 3,
        unique: true,
        slot: "Astromech",
        points: 6,
        charge: 2
      }, {
        name: "R3 Astromech",
        unique: true,
        id: 4,
        slot: "Astromech",
        points: 3
      }, {
        name: "R4 Astromech",
        id: 5,
        unique: true,
        slot: "Astromech",
        points: 2,
        restrictions: [["Base", "Small"]],
        modifier_func: function(stats) {
          var turn, _i, _ref, _results;
          if (stats.maneuvers[1] != null) {
            _results = [];
            for (turn = _i = 0, _ref = stats.maneuvers[1].length; 0 <= _ref ? _i < _ref : _i > _ref; turn = 0 <= _ref ? ++_i : --_i) {
              if (turn > 4) {
                continue;
              }
              if (stats.maneuvers[1][turn] > 1) {
                stats.maneuvers[1][turn]--;
              }
              if (stats.maneuvers[2][turn] > 1) {
                _results.push(stats.maneuvers[2][turn]--);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "R5 Astromech",
        id: 6,
        unique: true,
        slot: "Astromech",
        points: 4,
        charge: 2
      }, {
        name: "R5-D8",
        id: 7,
        unique: true,
        unique: true,
        slot: "Astromech",
        points: 6,
        charge: 3,
        faction: "Rebel Alliance"
      }, {
        name: "Watchful Astromech",
        id: 8,
        unique: true,
        slot: "Astromech",
        points: 2
      }, {
        name: "BB Astromech",
        id: 9,
        unique: true,
        unique: true,
        slot: "Astromech",
        points: 6,
        charge: 2
      }, {
        name: "Composure",
        id: 10,
        unique: true,
        slot: "Talent",
        points: 1,
        restrictions: [["Action", "Focus"]]
      }, {
        name: "Tierfon Belly Run",
        id: 11,
        unique: true,
        points: 0,
        slot: "Talent",
        restrictions: [["Keyword", "Y-Wing"]]
      }, {
        name: "Deadeye Shot",
        id: 12,
        unique: true,
        slot: "Talent",
        points: 1,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Marg Sabl Closure",
        id: 13,
        unique: true,
        slot: "Talent",
        points: 1,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Hopeful",
        id: 14,
        unique: true,
        points: 1,
        slot: "Talent",
        faction: "Rebel Alliance"
      }, {
        name: "Marksmanship",
        id: 15,
        unique: true,
        slot: "Talent",
        points: 1
      }, {
        name: "Daredevil",
        id: 16,
        unique: true,
        slot: "Talent",
        points: 2,
        restrictions: [["Action", "W-Boost"], ["Base", "Small"]]
      }, {
        name: "Elusive",
        id: 17,
        unique: true,
        slot: "Talent",
        points: 2,
        charge: 1,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Predator",
        id: 18,
        unique: true,
        slot: "Talent",
        points: 2
      }, {
        name: "Selfless",
        id: 19,
        unique: true,
        slot: "Talent",
        points: 2,
        faction: "Rebel Alliance"
      }, {
        name: "Crack Shot",
        id: 20,
        unique: true,
        slot: "Talent",
        points: 3,
        charge: 1
      }, {
        name: "Trick Shot",
        id: 21,
        unique: true,
        slot: "Talent",
        points: 4
      }, {
        name: "Lone Wolf",
        id: 22,
        unique: true,
        slot: "Talent",
        points: 5,
        unique: true,
        recurring: 1,
        charge: 1
      }, {
        name: "Swarm Tactics",
        id: 23,
        unique: true,
        slot: "Talent",
        points: 5
      }, {
        name: "Squad Leader",
        id: 24,
        unique: true,
        slot: "Talent",
        points: 6,
        unique: true,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Coordinate') < 0) {
            return stats.actions.push('R-Coordinate');
          }
        }
      }, {
        name: "Outmaneuver",
        id: 25,
        unique: true,
        slot: "Talent",
        points: 12
      }, {
        name: "Ruthless",
        id: 26,
        unique: true,
        slot: "Talent",
        points: 1,
        faction: "Galactic Empire"
      }, {
        name: "Disciplined",
        id: 27,
        unique: true,
        points: 2,
        slot: "Talent",
        faction: "Galactic Empire"
      }, {
        name: "Seismic Charges",
        id: 28,
        unique: true,
        slot: "Device",
        points: 3,
        charge: 2,
        applies_condition: 'Seismic Charge'.canonicalize()
      }, {
        name: "Proton Bombs",
        id: 29,
        unique: true,
        slot: "Device",
        points: 4,
        charge: 2,
        applies_condition: 'Proton Bomb'.canonicalize()
      }, {
        name: "Blazer Bomb",
        id: 30,
        unique: true,
        points: 5,
        charge: 1,
        slot: "Device",
        applies_condition: 'Blazer Bomb'.canonicalize()
      }, {
        name: "Conner Nets",
        id: 31,
        unique: true,
        slot: "Device",
        points: 5,
        charge: 1,
        applies_condition: 'Conner Net'.canonicalize()
      }, {
        name: "Ion Bombs",
        id: 32,
        unique: true,
        slot: "Device",
        points: 4,
        charge: 2,
        applies_condition: 'Ion Bomb'.canonicalize()
      }, {
        name: "Electro-Proton Bomb",
        id: 33,
        unique: true,
        slot: "Device",
        points: 8,
        charge: 1,
        restrictions: [["Action", "Reload"], ["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"],
        applies_condition: 'Electro-Proton Bomb'.canonicalize()
      }, {
        name: "Dorsal Turret",
        id: 34,
        unique: true,
        slot: "Turret",
        points: 2,
        attackt: 2,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Ion Cannon Turret",
        id: 35,
        unique: true,
        slot: "Turret",
        points: 5,
        attackt: 3,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Cluster Missiles",
        id: 36,
        unique: true,
        slot: "Missile",
        points: 4,
        attack: 3,
        range: "1-2",
        rangebonus: true,
        charge: 4
      }, {
        name: "Homing Missiles",
        id: 37,
        unique: true,
        slot: "Missile",
        points: 5,
        attack: 4,
        range: "2-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "Weapons Systems Officer",
        id: 38,
        unique: true,
        points: 5,
        slot: "Gunner"
      }, {
        name: "Agile Gunner",
        id: 39,
        unique: true,
        slot: "Gunner",
        points: 3
      }, {
        name: "Suppressive Gunner",
        id: 40,
        unique: true,
        slot: "Gunner",
        points: 4
      }, {
        name: "Targeting Computer",
        id: 41,
        slot: "Modification",
        points: 1,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Lock') < 0) {
            return stats.actions.push('Lock');
          }
        }
      }, {
        name: "Munitions Failsafe",
        id: 42,
        slot: "Modification",
        points: 1
      }, {
        name: "Electronic Baffle",
        id: 43,
        slot: "Modification",
        points: 2
      }, {
        name: "Shield Upgrade",
        id: 44,
        unique: true,
        slot: "Modification",
        points: 8,
        modifier_func: function(stats) {
          return stats.shields += 1;
        }
      }, {
        name: "Afterburners",
        id: 45,
        unique: true,
        slot: "Modification",
        points: 10,
        charge: 2,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Proton Cannons",
        id: 46,
        unique: true,
        slot: "Cannon",
        points: 4,
        attackbull: 4,
        range: "2-3",
        rangebonus: true,
        charge: 2,
        recurring: 1,
        restrictions: [["Slot", "Cannon"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Cannon");
        },
        also_occupies_upgrades: ["Cannon"]
      }, {
        name: "Ion Cannon",
        id: 47,
        unique: true,
        slot: "Cannon",
        points: 6,
        attack: 3,
        range: "1-3"
      }, {
        name: "Tractor Beam",
        id: 48,
        unique: true,
        slot: "Cannon",
        points: 4,
        attack: 3,
        range: "1-3"
      }, {
        name: "Ion Torpedoes",
        id: 49,
        unique: true,
        slot: "Torpedo",
        points: 4,
        attack: 4,
        range: "2-3",
        rangebonus: true,
        charge: 2,
        faction: "Rebel Alliance"
      }, {
        name: 'GNK "Gonk" Droid',
        unique: true,
        id: 50,
        slot: "Crew",
        points: 5,
        charge: 1
      }, {
        name: "Perceptive Copilot",
        unique: true,
        id: 51,
        slot: "Crew",
        points: 8
      }, {
        name: "Tactical Officer",
        id: 52,
        unique: true,
        slot: "Crew",
        points: 3,
        restrictions: [["Action", "R-Coordinate"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Coordinate') < 0) {
            return stats.actions.push('Coordinate');
          }
        }
      }, {
        name: "Freelance Slicer",
        id: 53,
        slot: "Crew",
        points: 1
      }, {
        name: "Collision Detector",
        id: 54,
        slot: "Sensor",
        points: 9,
        charge: 2
      }, {
        name: "Bistan",
        id: 55,
        slot: "Gunner",
        points: 8,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Pivot Wing",
        id: 56,
        points: 0,
        slot: "Configuration",
        ship: "U-Wing"
      }, {
        name: "Sensitive Controls",
        id: 57,
        points: 0,
        slot: "Configuration",
        standardized: true,
        restrictions: [["Keyword", "Autothrusters"]],
        modifier_func: function(stats) {
          return stats.chassis = "Sensitive Controls";
        }
      }, {
        name: "Protectorate Gleb",
        id: 58,
        unique: true,
        points: 6,
        slot: "Crew",
        faction: ["Galactic Empire", "First Order", "Scum and Villainy"],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Coordinate') < 0) {
            return stats.actions.push('R-Coordinate');
          }
        }
      }, {
        name: "ISB Slicer",
        unique: true,
        id: 59,
        slot: "Crew",
        points: 1,
        faction: "Galactic Empire"
      }, {
        name: "Tactical Scrambler",
        unique: true,
        id: 60,
        slot: "Modification",
        points: 2,
        restrictions: [["Base", "Medium", "Large"]]
      }, {
        name: "Fire-Control System",
        unique: true,
        id: 61,
        slot: "Sensor",
        points: 2
      }, {
        name: "Plasma Torpedoes",
        unique: true,
        id: 62,
        slot: "Torpedo",
        points: 7,
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "Feedback Array",
        id: 63,
        slot: "Illicit",
        points: 4
      }, {
        name: "Swivel Wing",
        id: 64,
        points: 0,
        slot: "Configuration",
        ship: "Gauntlet Fighter"
      }, {
        name: "Vectored Cannons (RZ-1)",
        id: 65,
        points: 0,
        slot: "Configuration",
        standardized: true,
        restrictions: [["Keyword", "Vectored Thrusters"]],
        modifier_func: function(stats) {
          return stats.chassis = "Vectored Cannons";
        }
      }, {
        name: "Captain Hark",
        id: 66,
        points: 3,
        charge: 2,
        slot: "Crew",
        faction: "Galactic Empire",
        unique: true
      }, {
        name: "Xg-1 Assault Configuration",
        id: 67,
        points: 0,
        slot: "Configuration",
        ship: "Alpha-Class Star Wing",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Cannon"
          }
        ]
      }, {
        name: "Gar Saxon",
        id: 68,
        points: 6,
        slot: "Crew",
        faction: "Galactic Empire",
        unique: true
      }, {
        name: "Tiber Saxon",
        id: 69,
        points: 4,
        charge: 2,
        recurring: 1,
        slot: "Gunner",
        faction: "Galactic Empire",
        unique: true
      }, {
        name: "Electro-Chaff Missiles",
        id: 70,
        unique: true,
        points: 4,
        slot: "Missile",
        max_per_squad: 2,
        charge: 1,
        faction: "Galactic Empire",
        restrictions: [["Slot", "Device"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Device");
        },
        also_occupies_upgrades: ["Device"],
        applies_condition: 'Electro-Chaff Cloud'.canonicalize()
      }, {
        name: "Adv. Proton Torpedoes",
        id: 71,
        slot: "Torpedo",
        points: 8,
        attack: 5,
        range: "1",
        rangebonus: true,
        charge: 1,
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Heavy Laser Cannon",
        id: 72,
        slot: "Cannon",
        points: 4,
        attackbull: 4,
        range: "2-3",
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Minister Tua",
        id: 73,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Beskar Reinforced Plating",
        id: 74,
        unique: true,
        points: 6,
        slot: "Modification",
        charge: 2,
        restrictions: [["Keyword", "Mandalorian"]]
      }, {
        name: "Mandalorian Optics",
        id: 75,
        points: 5,
        slot: "Modification",
        charge: 2,
        restrictions: [["Keyword", "Mandalorian"]]
      }, {
        name: "Drop-Seat Bay",
        id: 76,
        points: 1,
        slot: "Modification",
        ship: "Gauntlet Fighter",
        unequips_upgrades: ['Device'],
        also_occupies_upgrades: ['Device'],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Crew"
          }, {
            type: exportObj.Upgrade,
            slot: "Crew"
          }
        ]
      }, {
        name: "Imperial Super Commandos",
        id: 77,
        points: 7,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: "Galactic Empire",
        restrictions: [["Slot", "Crew"], ["Base", "Non-Small"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        applies_condition: 'Imperial Super Commandos'.canonicalize()
      }
    ],
    conditionsById: [
      {
        name: 'Zero Condition',
        id: 0
      }, {
        name: 'Suppressive Fire',
        id: 1,
        unique: true
      }, {
        name: 'Hunted',
        id: 2,
        unique: true
      }, {
        name: 'Listening Device',
        id: 3,
        unique: true
      }, {
        name: 'Optimized Prototype',
        id: 4,
        unique: true
      }, {
        name: 'I\'ll Show You the Dark Side',
        id: 5,
        unique: true
      }, {
        name: 'Proton Bomb',
        id: 6
      }, {
        name: 'Seismic Charge',
        id: 7
      }, {
        name: 'Bomblet',
        id: 8
      }, {
        name: 'Loose Cargo',
        id: 9
      }, {
        name: 'Conner Net',
        id: 10
      }, {
        name: 'Proximity Mine',
        id: 11
      }, {
        name: 'Rattled',
        id: 12,
        unique: true
      }, {
        name: 'DRK-1 Probe Droid',
        id: 13
      }, {
        name: 'Buzz Droid Swarm',
        id: 14
      }, {
        name: 'It\'s the Resistance',
        id: 15
      }, {
        name: 'Electro-Proton Bomb',
        id: 16
      }, {
        name: 'Decoyed',
        id: 17,
        unique: true
      }, {
        name: 'Compromising Intel',
        id: 18,
        unique: true
      }, {
        name: 'Cluster Mine',
        id: 19
      }, {
        name: 'Ion Bomb',
        id: 20
      }, {
        name: 'Concussion Bomb',
        id: 21
      }, {
        name: 'Thermal Detonator',
        id: 22
      }, {
        name: 'Sensor Buoy',
        id: 23
      }, {
        name: 'Fearful Prey',
        id: 24,
        unique: true
      }, {
        name: 'You Should Thank Me',
        id: 25
      }, {
        name: 'You\'d Better Mean Business',
        id: 26
      }, {
        name: 'Spare Parts',
        id: 27
      }, {
        name: 'Electro-Chaff Cloud',
        id: 28
      }, {
        name: 'Tracking Torpedoes',
        id: 29
      }, {
        name: 'False Friend',
        id: 30,
        unique: true
      }, {
        name: 'Trials of the Darksaber',
        id: 31,
        unique: true
      }, {
        name: 'Blazer Bomb',
        id: 32
      }, {
        name: 'Merciless Pursuit',
        id: 33
      }, {
        name: 'Marked for Elimination',
        id: 34,
        unique: true
      }, {
        name: 'Clan Wren Commandos',
        id: 35
      }, {
        name: 'Nite Owl Commandos',
        id: 36
      }, {
        name: 'Death Watch Commandos',
        id: 37
      }, {
        name: 'Imperial Super Commandos',
        id: 38
      }, {
        name: 'Mandalorian Super Commandos',
        id: 39
      }, {
        name: 'Guarded',
        id: 40
      }
    ],
    chassisById: [
      {
        name: "Hope",
        id: 0
      }, {
        name: "Autothrusters",
        id: 1
      }, {
        name: "Microthrusters",
        id: 2
      }, {
        name: "Sensor Blindspot",
        id: 3
      }, {
        name: "Stygium Array",
        id: 4
      }, {
        name: "Experimental Scanners",
        id: 5
      }, {
        name: "Full Throttle",
        id: 6
      }, {
        name: "Nimble Bomber",
        id: 7
      }, {
        name: "Weapon Hardpoint",
        id: 8
      }, {
        name: "Advanced Targeting Computer",
        id: 9
      }, {
        name: "Vectored Thrusters",
        id: 10
      }, {
        name: "Advanced Fire Control",
        id: 11
      }, {
        name: "Sensitive Controls",
        id: 12
      }, {
        name: "Spacetug Tractor Array",
        id: 13
      }, {
        name: "Concordia Faceoff",
        id: 14
      }, {
        name: "Locked and Loaded",
        id: 15
      }, {
        name: "Tail Gun",
        id: 16
      }, {
        name: "Advanced Droid Brain",
        id: 17
      }, {
        name: "Vectored Cannons",
        id: 18
      }, {
        name: "Networked Calculations",
        id: 19
      }, {
        name: "Independent Calculations",
        id: 20
      }, {
        name: "Linked Battery",
        id: 21
      }, {
        name: "Heavy Weapon Turret",
        id: 22
      }, {
        name: "Refined Gyrostabilizers",
        id: 23
      }, {
        name: "Rigged Energy Cells",
        id: 24
      }, {
        name: "Co-Pilot",
        id: 25
      }, {
        name: "Controlled Ailerons",
        id: 26
      }, {
        name: "Comms Shuttle",
        id: 27
      }, {
        name: "Dead to Rights",
        id: 28
      }, {
        name: "Pursuit Craft",
        id: 29
      }, {
        name: "Adaptive Ailerons",
        id: 30
      }, {
        name: "Fire Convergence",
        id: 31
      }, {
        name: "Networked Aim",
        id: 32
      }, {
        name: "Fine-Tuned Thrusters",
        id: 33
      }, {
        name: "Explosion with Wings",
        id: 34
      }, {
        name: "Plated Hull",
        id: 35
      }, {
        name: "Pinpoint Tractor Array",
        id: 36
      }, {
        name: "Fine-Tuned Controls",
        id: 37
      }, {
        name: "Notched Stabilizers",
        id: 38
      }, {
        name: "Rotating Cannons",
        id: 39
      }, {
        name: "Twin Ion Engines",
        id: 40
      }, {
        name: "Versatile Frame",
        id: 41
      }, {
        name: "Pursuit Thrusters",
        id: 42
      }, {
        name: "Devastating Barrage",
        id: 43
      }, {
        name: "Intuitive Interface",
        id: 44
      }, {
        name: "Intuitive Controls",
        id: 45
      }
    ],
    quickbuildsById: [
      {
        id: 0
      }
    ]
  };
};

exportObj.setupCommonCardData = function(basic_cards) {
  var card, cards, chassis, chassis_data, chassis_name, condition, condition_data, condition_name, e, expansion, i, name, pilot, pilot_data, pilot_name, quickbuild_count, quickbuild_data, ship_data, ship_name, source, upgrade, upgrade_data, upgrade_name, _base, _base1, _base10, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9, _i, _j, _k, _l, _len, _len1, _len10, _len11, _len12, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _name, _name1, _name10, _name2, _name3, _name4, _name5, _name6, _name7, _name8, _name9, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref22, _ref23, _ref24, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _s, _t, _u;
  _ref = basic_cards.pilotsById;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    pilot_data = _ref[i];
    if (pilot_data.id !== i) {
      throw new Error("ID mismatch: pilot at index " + i + " has ID " + pilot_data.id);
    }
  }
  _ref1 = basic_cards.upgradesById;
  for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
    upgrade_data = _ref1[i];
    if (upgrade_data.id !== i) {
      throw new Error("ID mismatch: upgrade at index " + i + " has ID " + upgrade_data.id);
    }
  }
  _ref2 = basic_cards.conditionsById;
  for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
    condition_data = _ref2[i];
    if (condition_data.id !== i) {
      throw new Error("ID mismatch: condition at index " + i + " has ID " + condition_data.id);
    }
  }
  _ref3 = basic_cards.chassisById;
  for (i = _l = 0, _len3 = _ref3.length; _l < _len3; i = ++_l) {
    chassis_data = _ref3[i];
    if (chassis_data.id !== i) {
      throw new Error("ID mismatch: chassis at index " + i + " has ID " + chassis_data.id);
    }
  }
  _ref4 = basic_cards.quickbuildsById;
  for (i = _m = 0, _len4 = _ref4.length; _m < _len4; i = ++_m) {
    quickbuild_data = _ref4[i];
    if (quickbuild_data.id !== i) {
      throw new Error("ID mismatch: quickbuild  at index " + i + " has ID " + quickbuild_data.id);
    }
  }
  exportObj.pilots = {};
  _ref5 = basic_cards.pilotsById;
  for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
    pilot_data = _ref5[_n];
    if (pilot_data.skip == null) {
      pilot_data.sources = [];
      if (pilot_data.canonical_name == null) {
        pilot_data.canonical_name = pilot_data.name.canonicalize();
      }
      exportObj.pilots[pilot_data.name] = pilot_data;
    }
  }
  exportObj.upgrades = {};
  _ref6 = basic_cards.upgradesById;
  for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
    upgrade_data = _ref6[_o];
    if (upgrade_data.skip == null) {
      upgrade_data.sources = [];
      if (upgrade_data.canonical_name == null) {
        upgrade_data.canonical_name = upgrade_data.name.canonicalize();
      }
      exportObj.upgrades[upgrade_data.name] = upgrade_data;
    }
  }
  exportObj.conditions = {};
  _ref7 = basic_cards.conditionsById;
  for (_p = 0, _len7 = _ref7.length; _p < _len7; _p++) {
    condition_data = _ref7[_p];
    if (condition_data.skip == null) {
      if (condition_data.canonical_name == null) {
        condition_data.canonical_name = condition_data.name.canonicalize();
      }
      exportObj.conditions[condition_data.name] = condition_data;
    }
  }
  exportObj.chassis = {};
  _ref8 = basic_cards.chassisById;
  for (_q = 0, _len8 = _ref8.length; _q < _len8; _q++) {
    chassis_data = _ref8[_q];
    if (chassis_data.skip == null) {
      if (chassis_data.canonical_name == null) {
        chassis_data.canonical_name = chassis_data.name.canonicalize();
      }
      exportObj.chassis[chassis_data.name] = chassis_data;
    }
  }
  exportObj.obstacles = {};
  exportObj.quickbuildsById = {};
  quickbuild_count = 0;
  _ref9 = basic_cards.quickbuildsById;
  for (_r = 0, _len9 = _ref9.length; _r < _len9; _r++) {
    quickbuild_data = _ref9[_r];
    if (quickbuild_data.skip == null) {
      quickbuild_count += 1;
      if (quickbuild_data.suffix == null) {
        quickbuild_data.suffix = "";
      }
      exportObj.quickbuildsById[quickbuild_data.id] = quickbuild_data;
    }
  }
  if (Object.keys(exportObj.quickbuildsById).length !== quickbuild_count) {
    throw new Error("At least one quickbuild shares an ID with another");
  }
  _ref10 = basic_cards.ships;
  for (ship_name in _ref10) {
    ship_data = _ref10[ship_name];
    if (ship_data.canonical_name == null) {
      ship_data.canonical_name = ship_data.name.canonicalize();
    }
    ship_data.sources = [];
  }
  _ref11 = exportObj.manifestByExpansion;
  for (expansion in _ref11) {
    cards = _ref11[expansion];
    for (_s = 0, _len10 = cards.length; _s < _len10; _s++) {
      card = cards[_s];
      if (card.skipForSource) {
        continue;
      }
      try {
        switch (card.type) {
          case 'pilot':
            exportObj.pilots[card.name].sources.push(expansion);
            break;
          case 'upgrade':
            exportObj.upgrades[card.name].sources.push(expansion);
            break;
          case 'ship':
            exportObj.ships[card.name].sources.push(expansion);
            break;
          case 'obstacle':
            if (!(card.name in exportObj.obstacles)) {
              exportObj.obstacles[card.name] = {
                sources: []
              };
            }
            exportObj.obstacles[card.name].sources.push(expansion);
            break;
          default:
            throw new Error("Unexpected card type " + card.type + " for card " + card.name + " of " + expansion);
        }
      } catch (_error) {
        e = _error;
        console.log(e);
        console.error("Error adding card " + card.name + " (" + card.type + ") from " + expansion);
      }
    }
  }
  _ref12 = exportObj.pilots;
  for (name in _ref12) {
    card = _ref12[name];
    card.sources = card.sources.sort();
  }
  _ref13 = exportObj.upgrades;
  for (name in _ref13) {
    card = _ref13[name];
    card.sources = card.sources.sort();
  }
  exportObj.expansions = {};
  exportObj.pilotsById = {};
  _ref14 = exportObj.pilots;
  for (pilot_name in _ref14) {
    pilot = _ref14[pilot_name];
    exportObj.fixIcons(pilot);
    exportObj.pilotsById[pilot.id] = pilot;
    _ref15 = pilot.sources;
    for (_t = 0, _len11 = _ref15.length; _t < _len11; _t++) {
      source = _ref15[_t];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.pilotsById).length !== Object.keys(exportObj.pilots).length) {
    throw new Error("At least one pilot shares an ID with another");
  }
  exportObj.pilotsByFactionCanonicalName = {};
  exportObj.pilotsByKeyword = {};
  exportObj.pilotsByUniqueName = {};
  _ref16 = exportObj.pilots;
  for (pilot_name in _ref16) {
    pilot = _ref16[pilot_name];
    ((_base = ((_base1 = exportObj.pilotsByFactionCanonicalName)[_name1 = pilot.faction] != null ? _base1[_name1] : _base1[_name1] = {}))[_name = pilot.canonical_name] != null ? _base[_name] : _base[_name] = []).push(pilot);
    ((_base2 = ((_base3 = exportObj.pilotsByKeyword)[_name3 = pilot.keyword] != null ? _base3[_name3] : _base3[_name3] = {}))[_name2 = pilot.canonical_name] != null ? _base2[_name2] : _base2[_name2] = []).push(pilot);
    ((_base4 = exportObj.pilotsByUniqueName)[_name4 = pilot.canonical_name.getXWSBaseName()] != null ? _base4[_name4] : _base4[_name4] = []).push(pilot);
  }
  exportObj.pilotsByFactionXWS = {};
  _ref17 = exportObj.pilots;
  for (pilot_name in _ref17) {
    pilot = _ref17[pilot_name];
    ((_base5 = ((_base6 = exportObj.pilotsByFactionXWS)[_name6 = pilot.faction] != null ? _base6[_name6] : _base6[_name6] = {}))[_name5 = pilot.xws] != null ? _base5[_name5] : _base5[_name5] = []).push(pilot);
  }
  exportObj.upgradesById = {};
  _ref18 = exportObj.upgrades;
  for (upgrade_name in _ref18) {
    upgrade = _ref18[upgrade_name];
    exportObj.fixIcons(upgrade);
    exportObj.upgradesById[upgrade.id] = upgrade;
    _ref19 = upgrade.sources;
    for (_u = 0, _len12 = _ref19.length; _u < _len12; _u++) {
      source = _ref19[_u];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.upgradesById).length !== Object.keys(exportObj.upgrades).length) {
    throw new Error("At least one upgrade shares an ID with another");
  }
  exportObj.upgradesBySlotCanonicalName = {};
  exportObj.upgradesBySlotXWSName = {};
  exportObj.upgradesBySlotUniqueName = {};
  exportObj.upgradesByUniqueName = {};
  _ref20 = exportObj.upgrades;
  for (upgrade_name in _ref20) {
    upgrade = _ref20[upgrade_name];
    ((_base7 = exportObj.upgradesBySlotCanonicalName)[_name7 = upgrade.slot] != null ? _base7[_name7] : _base7[_name7] = {})[upgrade.canonical_name] = upgrade;
    ((_base8 = exportObj.upgradesBySlotXWSName)[_name8 = upgrade.slot] != null ? _base8[_name8] : _base8[_name8] = {})[upgrade.xws] = upgrade;
    ((_base9 = exportObj.upgradesBySlotUniqueName)[_name9 = upgrade.slot] != null ? _base9[_name9] : _base9[_name9] = {})[upgrade.canonical_name.getXWSBaseName()] = upgrade;
    ((_base10 = exportObj.upgradesByUniqueName)[_name10 = upgrade.canonical_name.getXWSBaseName()] != null ? _base10[_name10] : _base10[_name10] = []).push(upgrade);
  }
  exportObj.conditionsById = {};
  _ref21 = exportObj.conditions;
  for (condition_name in _ref21) {
    condition = _ref21[condition_name];
    exportObj.fixIcons(condition);
    exportObj.conditionsById[condition.id] = condition;
  }
  if (Object.keys(exportObj.conditionsById).length !== Object.keys(exportObj.conditions).length) {
    throw new Error("At least one condition shares an ID with another");
  }
  exportObj.chassisById = {};
  _ref22 = exportObj.chassis;
  for (chassis_name in _ref22) {
    chassis = _ref22[chassis_name];
    exportObj.fixIcons(chassis);
    exportObj.chassisById[chassis.id] = chassis;
  }
  if (Object.keys(exportObj.chassisById).length !== Object.keys(exportObj.chassis).length) {
    throw new Error("At least one chassis shares an ID with another");
  }
  exportObj.conditionsByCanonicalName = {};
  _ref23 = exportObj.conditions;
  for (condition_name in _ref23) {
    condition = _ref23[condition_name];
    (exportObj.conditionsByCanonicalName != null ? exportObj.conditionsByCanonicalName : exportObj.conditionsByCanonicalName = {})[condition.canonical_name] = condition;
  }
  exportObj.chassisByCanonicalName = {};
  _ref24 = exportObj.chassis;
  for (chassis_name in _ref24) {
    chassis = _ref24[chassis_name];
    (exportObj.chassisByCanonicalName != null ? exportObj.chassisByCanonicalName : exportObj.chassisByCanonicalName = {})[chassis.canonical_name] = chassis;
  }
  return exportObj.expansions = Object.keys(exportObj.expansions).sort();
};

exportObj.setupTranslationCardData = function(pilot_translations, upgrade_translations, condition_translations, chassis_translations) {
  var chassis_name, condition_name, e, field, pilot_name, translation, translations, upgrade_name, _results;
  for (upgrade_name in upgrade_translations) {
    translations = upgrade_translations[upgrade_name];
    exportObj.fixIcons(translations);
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.upgrades[upgrade_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for upgrade " + upgrade_name + ". Please report this Issue. ");
        throw e;
      }
    }
  }
  for (condition_name in condition_translations) {
    translations = condition_translations[condition_name];
    exportObj.fixIcons(translations);
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.conditions[condition_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for condition " + condition_name + ". Please report this Issue. ");
        throw e;
      }
    }
  }
  for (chassis_name in chassis_translations) {
    translations = chassis_translations[chassis_name];
    exportObj.fixIcons(translations);
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.chassis[chassis_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for chassis " + chassis_name + ". Please report this Issue. ");
        throw e;
      }
    }
  }
  _results = [];
  for (pilot_name in pilot_translations) {
    translations = pilot_translations[pilot_name];
    exportObj.fixIcons(translations);
    _results.push((function() {
      var _results1;
      _results1 = [];
      for (field in translations) {
        translation = translations[field];
        try {
          _results1.push(exportObj.pilots[pilot_name][field] = translation);
        } catch (_error) {
          e = _error;
          console.error("Cannot find translation for attribute " + field + " for pilot " + pilot_name + ". Please report this Issue. ");
          throw e;
        }
      }
      return _results1;
    })());
  }
  return _results;
};

exportObj.fixIcons = function(data) {
  if (data.text != null) {
    return data.text = data.text.replace(/%BULLSEYEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bullseyearc"></i>').replace(/%SINGLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-singleturretarc"></i>').replace(/%DOUBLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-doubleturretarc"></i>').replace(/%FRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-frontarc"></i>').replace(/%REARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reararc"></i>').replace(/%LEFTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-leftarc"></i>').replace(/%RIGHTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rightarc"></i>').replace(/%ROTATEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rotatearc"></i>').replace(/%FULLFRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullfrontarc"></i>').replace(/%FULLREARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullreararc"></i>').replace(/%DEVICE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-device"></i>').replace(/%MODIFICATION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-modification"></i>').replace(/%RELOAD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reload"></i>').replace(/%FORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcecharge"></i>').replace(/%CHARGE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-charge"></i>').replace(/%ENERGY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-energy"></i>').replace(/%CALCULATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-calculate"></i>').replace(/%BANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>').replace(/%BANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankright"></i>').replace(/%BARRELROLL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>').replace(/%BOOST%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-boost"></i>').replace(/%CANNON%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>').replace(/%CARGO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cargo"></i>').replace(/%CLOAK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cloak"></i>').replace(/%F-COORDINATE%/g, '<i class="xwing-miniatures-font force xwing-miniatures-font-coordinate"></i>').replace(/%COORDINATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-coordinate"></i>').replace(/%CRIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crit"></i>').replace(/%ASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-astromech"></i>').replace(/%GUNNER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-gunner"></i>').replace(/%CREW%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crew"></i>').replace(/%TACTICALRELAY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tacticalrelay"></i>').replace(/%HARDPOINT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>').replace(/%EVADE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-evade"></i>').replace(/%FOCUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-focus"></i>').replace(/%HIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hit"></i>').replace(/%ILLICIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-illicit"></i>').replace(/%JAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-jam"></i>').replace(/%KTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%MISSILE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>').replace(/%RECOVER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-recover"></i>').replace(/%F-REINFORCE%/g, '<i class="xwing-miniatures-font force xwing-miniatures-font-reinforce"></i>').replace(/%REINFORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reinforce"></i>').replace(/%REVERSESTRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversestraight"></i>').replace(/%REVERSEBANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversebankleft"></i>').replace(/%REVERSEBANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversebankright"></i>').replace(/%SHIELD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-shield"></i>').replace(/%SLAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-slam"></i>').replace(/%SLOOPLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopleft"></i>').replace(/%SLOOPRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopright"></i>').replace(/%STRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-straight"></i>').replace(/%STOP%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-stop"></i>').replace(/%SENSOR%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sensor"></i>').replace(/%LOCK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-lock"></i>').replace(/%TORPEDO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo"></i>').replace(/%TROLLLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollleft"></i>').replace(/%TROLLRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollright"></i>').replace(/%TURNLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>').replace(/%TURNRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnright"></i>').replace(/%TURRET%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turret"></i>').replace(/%UTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%TALENT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-talent"></i>').replace(/%TITLE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-title"></i>').replace(/%TEAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-team"></i>').replace(/%TECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tech"></i>').replace(/%FORCEPOWER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcepower"></i>').replace(/%RANGEBONUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rangebonusindicator"></i>').replace(/%CONFIGURATION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-config"></i>').replace(/%AGILITY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-agility"></i>').replace(/%HULL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hull"></i>').replace(/%LINEBREAK%/g, '<br /><br />');
  }
};

exportObj.canonicalizeShipNames = function(card_data) {
  var ship_data, ship_name, _ref, _results;
  _ref = card_data.ships;
  _results = [];
  for (ship_name in _ref) {
    ship_data = _ref[ship_name];
    _results.push(ship_data.canonical_name != null ? ship_data.canonical_name : ship_data.canonical_name = ship_data.name.canonicalize());
  }
  return _results;
};

exportObj.renameShip = function(name, new_name) {
  return exportObj.ships[name].display_name = new_name;
};

exportObj.randomizer = function(faction_name, points) {
  var listcount, shiplistmaster;
  shiplistmaster = exportObj.basicCardData;
  return listcount = 0;
};

exportObj.standardShipInclusions = [
  {
    name: 'X-Wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'Y-Wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'U-Wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'TIE Fighter',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE/rb Heavy',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE Striker',
    faction: 'Galactic Empire'
  }, {
    name: 'Z-95 Headhunter',
    faction: 'Rebel Alliance'
  }, {
    name: 'TIE Advanced',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE Interceptor',
    faction: 'Galactic Empire'
  }, {
    name: 'Lambda-Class Shuttle',
    faction: 'Galactic Empire'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Separatist Alliance'
  }, {
    name: 'A-Wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'A-Wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'Fang Fighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'Fang Fighter',
    faction: 'Galactic Empire'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Galactic Empire'
  }, {
    name: 'VT-49 Decimator',
    faction: 'Galactic Empire'
  }, {
    name: 'Alpha-Class Star Wing',
    faction: 'Galactic Empire'
  }
];

exportObj.standardPilotExclusions = [];

exportObj.standardUpgradeExclusions = [];

exportObj.epicExclusionsList = [];

exportObj.epicExclusions = function(data) {
  var _ref, _ref1;
  if ((data.ship != null) && (_ref = data.ship, __indexOf.call(exportObj.epicExclusionsList, _ref) >= 0)) {
    return false;
  } else if ((data.slot != null) && (data.slot === "Command")) {
    return false;
  } else if ((data.name != null) && (_ref1 = data.name, __indexOf.call(exportObj.epicExclusionsList, _ref1) >= 0)) {
    return false;
  } else {
    return true;
  }
};

exportObj.standardCheck = function(data, faction, shipCheck) {
  var ship, _i, _len, _ref, _ref1, _ref2, _ref3;
  if (faction == null) {
    faction = '';
  }
  if (shipCheck == null) {
    shipCheck = false;
  }
  if (shipCheck) {
    if ((_ref = data.name, __indexOf.call(exportObj.standardPilotExclusions, _ref) >= 0)) {
      return false;
    }
    _ref1 = exportObj.standardShipInclusions;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      ship = _ref1[_i];
      if (ship.faction === faction && (data.name === ship.name || data.ship === ship.name || (Array.isArray(data.ship) && (_ref2 = ship.name, __indexOf.call(data.ship, _ref2) >= 0)))) {
        return true;
      }
    }
    return false;
  } else {
    return _ref3 = data.name, __indexOf.call(exportObj.standardUpgradeExclusions, _ref3) < 0;
  }
};

exportObj.standardCheckBrowser = function(data, faction, type) {
  var check, ship, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4;
  if (faction == null) {
    faction = '';
  }
  if (type === 'Pilot') {
    check = false;
    _ref = exportObj.standardShipInclusions;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      ship = _ref[_i];
      if (data.faction === ship.faction && (data.ship === ship.name)) {
        check = true;
      }
    }
    if (check === false) {
      return false;
    }
    return _ref1 = data.name, __indexOf.call(exportObj.standardPilotExclusions, _ref1) < 0;
  } else if (type === 'Ship') {
    _ref2 = exportObj.standardShipInclusions;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      ship = _ref2[_j];
      if (ship.faction === faction && (data.name === ship.name || data.ship === ship.name || (Array.isArray(data.ship) && (_ref3 = ship.name, __indexOf.call(data.ship, _ref3) >= 0)))) {
        return true;
      }
    }
    return false;
  } else {
    return _ref4 = data.name, __indexOf.call(exportObj.standardUpgradeExclusions, _ref4) < 0;
  }
};

if (exportObj.codeToLanguage == null) {
  exportObj.codeToLanguage = {};
}

exportObj.codeToLanguage.en = 'English';

if (exportObj.translations == null) {
  exportObj.translations = {};
}

exportObj.translations.English = {
  sloticon: {
    "Astromech": '<i class="xwing-miniatures-font xwing-miniatures-font-astromech"></i>',
    "Force": '<i class="xwing-miniatures-font xwing-miniatures-font-forcepower"></i>',
    "Bomb": '<i class="xwing-miniatures-font xwing-miniatures-font-bomb"></i>',
    "Cannon": '<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>',
    "Crew": '<i class="xwing-miniatures-font xwing-miniatures-font-crew"></i>',
    "Talent": '<i class="xwing-miniatures-font xwing-miniatures-font-talent"></i>',
    "Missile": '<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>',
    "Sensor": '<i class="xwing-miniatures-font xwing-miniatures-font-sensor"></i>',
    "Torpedo": '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo"></i>',
    "Turret": '<i class="xwing-miniatures-font xwing-miniatures-font-turret"></i>',
    "Illicit": '<i class="xwing-miniatures-font xwing-miniatures-font-illicit"></i>',
    "Configuration": '<i class="xwing-miniatures-font xwing-miniatures-font-config"></i>',
    "Modification": '<i class="xwing-miniatures-font xwing-miniatures-font-modification"></i>',
    "Gunner": '<i class="xwing-miniatures-font xwing-miniatures-font-gunner"></i>',
    "Device": '<i class="xwing-miniatures-font xwing-miniatures-font-device"></i>',
    "Tech": '<i class="xwing-miniatures-font xwing-miniatures-font-tech"></i>',
    "Title": '<i class="xwing-miniatures-font xwing-miniatures-font-title"></i>',
    "Hardpoint": '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>',
    "Team": '<i class="xwing-miniatures-font xwing-miniatures-font-team"></i>',
    "Cargo": '<i class="xwing-miniatures-font xwing-miniatures-font-cargo"></i>',
    "Command": '<i class="xwing-miniatures-font xwing-miniatures-font-command"></i>',
    "HardpointShip": '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>',
    "VersatileShip": '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>',
    "Tactical Relay": '<i class="xwing-miniatures-font xwing-miniatures-font-tacticalrelay"></i>'
  },
  restrictions: {
    "Restrictions": "Restrictions",
    "Initiative": "Initiative",
    "Agility": "Agility",
    "Non-Limited": "Non-Limited",
    " or Squad Including": " or Squad Including",
    "Ship": "Ship",
    "Extra": "Extra"
  },
  faction: {
    "Rebel Alliance": "Rebel Alliance",
    "Galactic Empire": "Galactic Empire",
    "Scum and Villainy": "Scum and Villainy",
    "Resistance": "Resistance",
    "First Order": "First Order",
    "Galactic Republic": "Galactic Republic",
    "Separatist Alliance": "Separatist Alliance"
  },
  slot: {
    "Astromech": "Astromech",
    "Force": "Force",
    "Bomb": "Bomb",
    "Cannon": "Cannon",
    "Crew": "Crew",
    "Missile": "Missile",
    "Sensor": "Sensor",
    "Torpedo": "Torpedo",
    "Turret": "Turret",
    "HardpointShip": "Weapon Hardpoint",
    "VersatileShip": "Versatile Frame",
    "Hardpoint": "Hardpoint",
    "Illicit": "Illicit",
    "Configuration": "Configuration",
    "Talent": "Talent",
    "Modification": "Modification",
    "Gunner": "Gunner",
    "Device": "Payload",
    "Tech": "Tech",
    "Title": "Title",
    "Tactical Relay": "Tactical Relay",
    "Command": "Command",
    "Hyperdrive": "Hyperdrive",
    "Team": "Team",
    "Cargo": "Cargo"
  },
  sources: {
    "Second Edition Core Set": "Second Edition Core Set",
    "Rebel Alliance Conversion Kit": "Rebel Alliance Conversion Kit",
    "Galactic Empire Conversion Kit": "Galactic Empire Conversion Kit",
    "Scum and Villainy Conversion Kit": "Scum and Villainy Conversion Kit",
    "T-65 X-Wing Expansion Pack": "T-65 X-Wing Expansion Pack",
    "BTL-A4 Y-Wing Expansion Pack": "BTL-A4 Y-Wing Expansion Pack",
    "TIE/ln Fighter Expansion Pack": "TIE/ln Fighter Expansion Pack",
    "TIE Advanced x1 Expansion Pack": "TIE Advanced x1 Expansion Pack",
    "Slave 1 Expansion Pack": "Slave 1 Expansion Pack",
    "Fang Fighter Expansion Pack": "Fang Fighter Expansion Pack",
    "Lando's Millennium Falcon Expansion Pack": "Lando's Millennium Falcon Expansion Pack",
    "Saw's Renegades Expansion Pack": "Saw's Renegades Expansion Pack",
    "TIE Reaper Expansion Pack": "TIE Reaper Expansion Pack",
    "ARC-170 Starfighter Expansion": "ARC-170 Starfighter Expansion",
    "Loose Ships": "Loose Ships",
    "Fugitives and Collaborators Squadron Pack": "Fugitives and Collaborators Squadron Pack",
    "First Order Conversion Kit": "First Order Conversion Kit",
    "M3-A Interceptor Expansion Pack": "M3-A Interceptor Expansion Pack"
  },
  ui: {
    "shipSelectorPlaceholder": "Select a ship",
    "pilotSelectorPlaceholder": "Select a pilot",
    upgradePlaceholder: function(translator, slot) {
      return "No " + (translator('slot', slot)) + " Upgrade";
    },
    "modificationPlaceholder": "No Modification",
    "titlePlaceholder": "No Title",
    upgradeHeader: function(translator, slot) {
      return "" + (translator('slot', slot)) + " Upgrade";
    },
    "unreleased": "unreleased",
    "epic": "epic",
    "Quickbuild": "Quick Build",
    "limited": "limited",
    "Unreleased content warning": "This squad uses unreleased content!",
    "Broken squad link warning": "It appears that you followed a broken link. No squad could be loaded!",
    "Collection warning": "You cannot field this list with your collection!",
    "Ship number warning": "A tournament legal squad must contain 3-8 ships!",
    "Multi-Faction warning": "Multi-Faction Lists are NEVER tournament legal!",
    "XWS Import Dialog": "Import your list via XWS into YASB.<br><i>XWS is a common format to share lists between applications.</i>",
    "Copy below simple text": "<p>Copy the below and paste it elsewhere.</p>",
    "Copy below markdown": "<p>Copy the below and paste it into your reddit post.</p><p>Make sure that the post editor is set to markdown mode.</p>",
    "Copy below TTS": "<p>Copy the below and paste it into the Tabletop Simulator.</p>",
    "Copy below BBCode": "<p>Copy the BBCode below and paste it into your forum post.</p>",
    "Copy below HTML": "<p>Copy the below and paste it elsewhere.</p>",
    "Copy below XWS": "<p>Copy and paste this into an XWS-compliant application.</p>",
    "Use INI prefix": "Put INI as prefix in front of names.",
    "Choose obstacles dialog": "Choose up to three obstacles, to include in the permalink for use in external programs",
    "Mark obstacles": "Mark the three obstacles you are using.",
    "Scan QR-Code": "Scan to open this list in the builder",
    "View in YASB": "View in YASB 2",
    "YASB advertisment": "YASB 2 is a simple, fast, and easy to use squad builder for X-Wing Miniatures by Fantasy Flight Games.",
    collectionContentShips: function(translator, number) {
      return "You have " + number + " ship " + (number === 1 ? 'model' : 'models') + " in your collection.";
    },
    collectionContentShipsAndPilots: function(translator, data) {
      return "You have " + data[0] + " ship " + (data[0] === 1 ? 'model' : 'models') + " and " + data[1] + " pilot " + (data[1] === 1 ? 'card' : 'cards') + " in your collection.";
    },
    collectionContentUpgrades: function(translator, number) {
      return "You have " + number + " in your collection.";
    },
    varPointCostsPoints: function(translator, points) {
      return "<b>Point cost:</b> " + points + " when ";
    },
    varPointCostsConditionAgility: function(translator, values) {
      return "agility is " + values;
    },
    varPointCostsConditionIni: function(translator, values) {
      return "initiative is " + values;
    },
    varPointCostsConditionBase: function(translator, values) {
      return "base size is small, medium, large or huge";
    },
    "Missing Item List:": "To field this squad you need the following additional items:",
    pilotFlyingShip: function(translator, pilot, ship) {
      return "Pilot " + pilot + " flying " + ship;
    },
    "Placeholder Textsearch Browser": "Search for name, text or ship",
    noXYselected: function(translator, xy) {
      return "No " + (translator('ui', xy)) + " selected";
    },
    "Select a card": "Select a card from the list at the left.",
    yourXYsquads: function(translator, faction) {
      return "Your " + (translator('faction', faction)) + " Squads";
    },
    reallyDeleteSquadXY: function(translator, squadname) {
      return "Really delete " + squadname + "?";
    },
    "No saved squads": "Nothing to see here. Go save a squad!",
    "name required": "A name is required",
    "Name in use": "You already have a squad with that name",
    "select OAuth provider": "Select one of the OAuth providers below to log in and start saving squads.",
    "OAuth explanation": "<p>\n    <a href=\"http://en.wikipedia.org/wiki/OAuth\" target=\"_blank\">OAuth</a> is an authorization system which lets you prove your identity at a web site without having to create a new account.  Instead, you tell some provider with whom you already have an account (e.g. Google or Facebook) to prove to this web site that you say who you are.  That way, the next time you visit, this site remembers that you're that user from Google.\n</p>\n<p>\n    The best part about this is that you don't have to come up with a new username and password to remember.  And don't worry, I'm not collecting any data from the providers about you.  I've tried to set the scope of data to be as small as possible, but some places send a bunch of data at minimum.  I throw it away.  All I look at is a unique identifier (usually some giant number).\n</p>\n<p>\n    For more information, check out this <a href=\"http://hueniverse.com/oauth/guide/intro/\" target=\"_blank\">introduction to OAuth</a>.\n</p>",
    "Intro Card YASB": "<h2>Fly Better Galactic Conquest Builder</h2>\n<p>This builder is used for the Galactic Conquest Narrative X-Wing event. Go to FlyBetterpodcast.com for more information on how to play.</p>\n<p>This is Mission 4</p>\n<h5>Credits</h5>\n<p>Fork of <a href=\"https://yasb.app/\">YASB.APP</a>.</p>\n<p>YASB is updated and maintained by Stephen Kim.</p>",
    "Continue to OAuth provider": "This will open a new window to let you authenticate with the chosen provider. You may have to allow pop ups for this site.",
    "iOS requires cross-site control": "Due to a new feature in iOS systems OAuth won't work unless you enable \"cross-site control\".",
    "login in progress": "OAuth login is in progress. Please finish authorization at the specified provider using the window that was just created.",
    "Squads reloaded": "All squads of that faction have been reloaded.",
    "Sure to delete?": "Are you sure you want to delete this squad?",
    "Unsaved Changes Warning": "You have not saved changes to this squad.  Do you want to go back and save?",
    adds: function(translator, data) {
      return "Adds: " + (translator('ui', data));
    },
    removes: function(translator, data) {
      return "Removes: " + (translator('ui', data));
    },
    "Less upgrades": "Fewer upgrades"
  },
  singular: {
    'pilots': 'Pilot',
    'modifications': 'Modification',
    'titles': 'Title',
    'ships': 'Ship'
  },
  types: {
    'Pilot': 'Pilot',
    'Modification': 'Modification',
    'Title': 'Title',
    'Ship': 'Ship'
  },
  rulestypes: {
    'glossary': 'Glossary',
    'faq': 'FAQ'
  },
  action: {
    'Boost': 'Boost'
  }
};

if (exportObj.cardLoaders == null) {
  exportObj.cardLoaders = {};
}

exportObj.cardLoaders.English = function() {
  var chassis_translations, condition_translations, data, name, pilot_translations, upgrade_translations;
  exportObj.cardLanguage = 'English';
  exportObj.renameShip("YT-1300", "Modified YT-1300 Light Freighter");
  exportObj.renameShip("StarViper", "StarViper-class Attack Platform");
  exportObj.renameShip("Scurrg H-6 Bomber", "Scurrg H-6 Bomber");
  exportObj.renameShip("YT-2400", "YT-2400 Light Freighter");
  exportObj.renameShip("Auzituck Gunship", "Auzituck Gunship");
  exportObj.renameShip("Kihraxz Fighter", "Kihraxz Fighter");
  exportObj.renameShip("Sheathipede-Class Shuttle", "Sheathipede-class Shuttle");
  exportObj.renameShip("Quadjumper", "Quadrijet Transfer Spacetug");
  exportObj.renameShip("Firespray-31", "Firespray-class Patrol Craft");
  exportObj.renameShip("TIE Fighter", "TIE/ln Fighter");
  exportObj.renameShip("Y-Wing", "BTL-A4 Y-Wing");
  exportObj.renameShip("TIE Advanced", "TIE Advanced x1");
  exportObj.renameShip("Alpha-Class Star Wing", "Alpha-class Star Wing");
  exportObj.renameShip("U-Wing", "UT-60D U-Wing");
  exportObj.renameShip("TIE Striker", "TIE/sk Striker");
  exportObj.renameShip("B-Wing", "A/SF-01 B-Wing");
  exportObj.renameShip("TIE Defender", "TIE/D Defender");
  exportObj.renameShip("TIE Bomber", "TIE/sa Bomber");
  exportObj.renameShip("TIE Punisher", "TIE/ca Punisher");
  exportObj.renameShip("Aggressor", "Aggressor Assault Fighter");
  exportObj.renameShip("G-1A Starfighter", "G-1A Starfighter");
  exportObj.renameShip("VCX-100", "VCX-100 Light Freighter");
  exportObj.renameShip("YV-666", "YV-666 Light Freighter");
  exportObj.renameShip("TIE Advanced Prototype", "TIE Advanced v1");
  exportObj.renameShip("Lambda-Class Shuttle", "Lambda-class T-4a Shuttle");
  exportObj.renameShip("TIE Phantom", "TIE/ph Phantom");
  exportObj.renameShip("VT-49 Decimator", "VT-49 Decimator");
  exportObj.renameShip("TIE Aggressor", "TIE/ag Aggressor");
  exportObj.renameShip("K-Wing", "BTL-S8 K-Wing");
  exportObj.renameShip("ARC-170", "ARC-170 Starfighter");
  exportObj.renameShip("Attack Shuttle", "Attack Shuttle");
  exportObj.renameShip("X-Wing", "T-65 X-Wing");
  exportObj.renameShip("HWK-290", "HWK-290 Light Freighter");
  exportObj.renameShip("A-Wing", "RZ-1 A-Wing");
  exportObj.renameShip("Fang Fighter", "Fang Fighter");
  exportObj.renameShip("Z-95 Headhunter", "Z-95-AF4 Headhunter");
  exportObj.renameShip("M12-L Kimogila Fighter", "M12-L Kimogila Fighter");
  exportObj.renameShip("E-Wing", "E-Wing");
  exportObj.renameShip("TIE Interceptor", "TIE/in Interceptor");
  exportObj.renameShip("Lancer-Class Pursuit Craft", "Lancer-class Pursuit Craft");
  exportObj.renameShip("TIE Reaper", "TIE Reaper");
  exportObj.renameShip("M3-A Interceptor", "M3-A Interceptor");
  exportObj.renameShip("JumpMaster 5000", "JumpMaster 5000");
  exportObj.renameShip("Customized YT-1300", "Customized YT-1300 Light Freighter");
  exportObj.renameShip("Escape Craft", "Escape Craft");
  exportObj.renameShip("TIE/FO Fighter", "TIE/fo Fighter");
  exportObj.renameShip("TIE/SF Fighter", "TIE/sf Fighter");
  exportObj.renameShip("Upsilon-Class Command Shuttle", "Upsilon-Class Command Shuttle");
  exportObj.renameShip("TIE/VN Silencer", "TIE/vn Silencer");
  exportObj.renameShip("T-70 X-Wing", "T-70 X-Wing");
  exportObj.renameShip("RZ-2 A-Wing", "RZ-2 A-Wing");
  exportObj.renameShip("MG-100 StarFortress", "MG-100 StarFortress");
  exportObj.renameShip("Mining Guild TIE Fighter", "Mining Guild TIE Fighter");
  exportObj.renameShip("Scavenged YT-1300", "Scavenged YT-1300");
  exportObj.renameShip("TIE/WI Whisper", "TIE/wi Whisper Modified Interceptor");
  exportObj.renameShip("TIE/Se Bomber", "TIE/se Bomber");
  exportObj.renameShip("TIE/Ba Interceptor", "TIE/ba Interceptor");
  pilot_translations = {
    "Iden Versio": {
      display_name: "Iden Versio",
      text: "Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 %CHARGE%. If you do, prevent that damage."
    },
    '"Pure Sabacc"': {
      display_name: "“Pure Sabacc”",
      text: "While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die."
    },
    "Maarek Stele": {
      display_name: "Maarek Stele",
      text: "While you perform an attack, if the defender would be dealt a faceup damage card, instead draw 3 damage cards, choose 1, and discard the rest. "
    },
    "Heff Tobber": {
      display_name: "Heff Tobber",
      text: "After an enemy ship executes a maneuver, if it is at range 0, you may perform an action."
    },
    "Norra Wexley (Y-Wing)": {
      display_name: "Norra Wexley",
      text: "While you defend, if there is an enemy ship at range 0-1, add 1 %EVADE% result to your dice results."
    },
    "Lieutenant Sai": {
      display_name: "Lieutenant Sai",
      text: "After you a perform a %COORDINATE% action, if the ship you chose performed an action on your action bar, you may perform that action."
    },
    "Lieutenant Lorrir": {
      text: "While you barrel roll, you <b>must</b> use the (%BANKLEFT% or %BANKRIGHT%) template instead of the %STRAIGHT% template. "
    },
    "Bodica Venj": {
      display_name: "Bodica Venj",
      text: "After another friendly ship defends, if you are not depleted, you may perform a bonus primary attack against the attacker. If you do, after performing that attack, gain 1 deplete token. "
    },
    "Thane Kyrell": {
      display_name: "Thane Kyrell",
      text: "While you perform an attack, you may spend 1 %FOCUS%, %HIT%, or %CRIT% result to look at the defender's facedown damage cards, choose 1, and expose it."
    },
    "Joy Rekkoff": {
      display_name: "Joy Rekkoff",
      text: "While you perform an attack, you may spend 1 %CHARGE% from an equipped %TORPEDO% upgrade. If you do, the defender rolls 1 fewer defense die."
    },
    "Clan Wren Volunteer": {
      display_name: "Clan Wren Volunteer",
      text: "While you perform an attack at range 1, if the speed of your maneuver matches that of a friendly ship at range 1, you may reroll 1 attack die. "
    },
    "Major Vynder": {
      display_name: "Major Vynder",
      text: "While you defend, if you are disarmed, roll 1 additional defense die."
    },
    "Captain Oicunn": {
      display_name: "Captain Oicunn",
      text: "While you perform an attack at attack range 0, treat it as an attack at attack range 1. %LINEBREAK%<i>Errata (since rules reference 1.4): Ability changed to work in new core rules</i>"
    }
  };
  upgrade_translations = {
    "Servomotor S-Foils": {
      display_name: "Servomotor S-Foils",
      text: "<strong>Closed: </strong><i>%BOOST%, %FOCUS% <i class=\"xwing-miniatures-font xwing-miniatures-font-linked\"></i> <r>%BOOST%</r></i>%LINEBREAK% While you perform a primary attack, roll 1 fewer attack die.%LINEBREAK%Before you activate, you may flip this card.%LINEBREAK%<strong>Open:</strong> Before you activate, you may flip this card."
    },
    "Maneuver-Assist MGK-300": {
      text: "Reduce the difficulty of your 3 straight (%STRAIGHT%) and bank (%BANKLEFT% or %BANKRIGHT%) maneuvers."
    },
    "Target-Assist MGK-300": {
      text: "Before you engage, if you have no green tokens and you are not stressed, gain 1 calculate token for each enemy ship at range 2-3 in your firing arc, to a maximum of 2."
    },
    "R2 Astromech": {
      display_name: "R2 Astromech",
      text: "After you reveal your dial, you may spend 1 %CHARGE% and gain 1 disarm token to recover 1 shield."
    },
    "R3 Astromech": {
      display_name: "R3 Astromech",
      text: "You can maintain up to 2 locks. Each lock must be on a different object.%LINEBREAK%After you perform a %LOCK% action, you may acquire a lock."
    },
    "R4 Astromech": {
      display_name: "R4 Astromech",
      text: "Decrease the difficulty of your speed 1-2 basic maneuvers (%TURNLEFT%, %BANKLEFT%, %STRAIGHT%, %BANKRIGHT%, %TURNRIGHT%)."
    },
    "R5 Astromech": {
      display_name: "R5 Astromech",
      text: "<strong>Action:</strong> Spend 1 %CHARGE% to repair 1 facedown damage card.%LINEBREAK%<strong>Action:</strong> Repair 1 faceup <strong>Ship</strong> damage card."
    },
    "R5-D8": {
      display_name: "R5-D8",
      text: "<strong>Action:</strong> Spend 1 %CHARGE% to repair 1 facedown damage card.%LINEBREAK%<strong>Action:</strong> Repair 1 faceup <strong>Ship</strong> damage card."
    },
    "BB Astromech": {
      display_name: "BB Astromech",
      text: "During the System Phase, you may spend 1 %CHARGE% to perform a %BARRELROLL% action. %LINEBREAK% <i>Errata (since rules reference 1.4.2): Changed the effect timing to the System Phase</i>"
    },
    "Composure": {
      display_name: "Composure",
      text: "After you fail an action, if you have no green tokens, you may perform a %FOCUS% action. If you do, you cannot perform additional actions this round. %LINEBREAK% <i>Errata (since rules reference 1.1.0): Added \"If you do, you cannot perform additional actions this round.\"</i>"
    },
    "Tierfon Belly Run": {
      text: "You can perform special attacks even while at range 0 of asteroids. %LINEBREAK% While you defend, if you are at range 0 of an obstacle, attack dice cannot be rerolled."
    },
    "Hopeful": {
      text: "After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the <strong>Hopeful</strong> upgrade, you may perform a %FOCUS% or %BOOST% action."
    },
    "Marksmanship": {
      display_name: "Marksmanship",
      text: "While you perform an attack, if the defender is in your %BULLSEYEARC%, you may change 1 %HIT% result to a %CRIT% result."
    },
    "Daredevil": {
      display_name: "Daredevil",
      text: "While you perform a white %BOOST% action, you may treat it as red to use the [1 %TURNLEFT%] or [1 %TURNRIGHT%] template instead."
    },
    "Elusive": {
      display_name: "Elusive",
      text: "While you defend, you may spend 1 %CHARGE% to reroll 1 defense die.%LINEBREAK%After you fully execute a red maneuver, recover 1 %CHARGE%."
    },
    "Predator": {
      display_name: "Predator",
      text: "While you perform a primary attack, if the defender is in your %BULLSEYEARC%, you may reroll 1 attack die."
    },
    "Selfless": {
      display_name: "Selfless",
      text: "While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 %CRIT% damage to cancel 1 %CRIT% result."
    },
    "Crack Shot": {
      display_name: "Crack Shot",
      text: "While you perform a primary attack, if the defender is in your %BULLSEYEARC%, before the Neutralize Results step, you may spend 1 %CHARGE% to cancel 1 %EVADE% result."
    },
    "Trick Shot": {
      display_name: "Trick Shot",
      text: "While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die."
    },
    "Lone Wolf": {
      display_name: "Lone Wolf",
      text: "While you defend or perform an attack, if there are no other friendly ships at range 0-2, you may spend 1 %CHARGE% to reroll 1 of your dice."
    },
    "Swarm Tactics": {
      display_name: "Swarm Tactics",
      text: "At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round."
    },
    "Squad Leader": {
      display_name: "Squad Leader",
      text: "While you coordinate, the ship you choose can perform an action only if that action is also on your action bar."
    },
    "Outmaneuver": {
      display_name: "Outmaneuver",
      text: "While you perform a %FRONTARC% attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die."
    },
    "Ruthless": {
      display_name: "Ruthless",
      text: "While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 %HIT% damage and you may change 1 of your die results to a %HIT% result."
    },
    "Disciplined": {
      text: "After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the <strong>Disciplined</strong> upgrade, you may perform a %LOCK% or %BARRELROLL% action."
    },
    "Seismic Charges": {
      display_name: "Seismic Charges",
      text: "<strong>Bomb</strong>%LINEBREAK%During the System Phase, you may spend 1 %CHARGE% to drop a Seismic Charge with the [1 %STRAIGHT%] template."
    },
    "Proton Bombs": {
      display_name: "Proton Bombs",
      text: "<strong>Bomb</strong>%LINEBREAK%During the System Phase, you may spend 1 %CHARGE% to drop a Proton Bomb using the [1 %STRAIGHT%] template."
    },
    "Blazer Bomb": {
      text: "<strong>Bomb</strong>%LINEBREAK% During the System Phase, you may spend 1 %CHARGE% to drop a Blazer Bomb using the [1 %STRAIGHT%] template."
    },
    "Conner Nets": {
      display_name: "Conner Nets",
      text: "<strong>Mine</strong>%LINEBREAK%During the System Phase, you may spend 1 %CHARGE% to drop a Conner Net using the [1 %STRAIGHT%] template.%LINEBREAK%This card's %CHARGE% cannot be recovered."
    },
    "Ion Bombs": {
      display_name: "Ion Bombs",
      text: "<strong>Bomb</strong>%LINEBREAK% During the System Phase, you may spend 1 %CHARGE% to drop an Ion Bomb using the [1 %STRAIGHT%] template."
    },
    "Electro-Proton Bomb": {
      display_name: "Electro-Proton Bomb",
      text: "<strong>Bomb</strong>%LINEBREAK%During the System Phase, you may spend 1 %CHARGE% to drop an Electro-Proton Bomb with the [1 %STRAIGHT%] template. Then place 1 fuse marker on that device. %LINEBREAK%This card's %CHARGE% cannot be recovered."
    },
    "Dorsal Turret": {
      display_name: "Dorsal Turret",
      text: "<strong>Attack</strong>"
    },
    "Ion Cannon": {
      display_name: "Ion Cannon",
      text: "<strong>Attack:</strong> If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    "Ion Cannon Turret": {
      display_name: "Ion Cannon Turret",
      text: "<strong>Attack:</strong> If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    "Cluster Missiles": {
      display_name: "Cluster Missiles",
      text: "<strong>Attack (%LOCK%):</strong> Spend 1 %CHARGE%. After this attack, you may perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the %LOCK% requirement."
    },
    "Homing Missiles": {
      display_name: "Homing Missiles",
      text: "<strong>Attack (%LOCK%):</strong> Spend 1 %CHARGE%. After you declare the defender, the defender may choose to suffer 1 %HIT% damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting."
    },
    "Agile Gunner": {
      display_name: "Agile Gunner",
      text: "During the End Phase, you may rotate your %SINGLETURRETARC% indicator."
    },
    "Suppressive Gunner": {
      text: "While you perform an attack, you may spend 1 %FOCUS% result. If you do, the defender gains 1 deplete token unless it chooses to suffer 1 %HIT% damage."
    },
    "Munitions Failsafe": {
      display_name: "Munitions Failsafe",
      text: "While you perform a %TORPEDO% or %MISSILE% attack, after rolling attack dice, you may cancel all dice results to recover 1 %CHARGE% you spent as a cost for the attack."
    },
    "Electronic Baffle": {
      display_name: "Electronic Baffle",
      text: "During the End Phase, you may suffer 1 %HIT% damage to remove 1 red token."
    },
    "Afterburners": {
      display_name: "Afterburners",
      text: "After you fully execute a speed 3-5 maneuver, you may spend 1 %CHARGE% to perform a %BOOST% action, even while stressed."
    },
    "Proton Cannons": {
      text: "<strong>Attack:</strong> Spend 2 %CHARGE%. Change 1 %FOCUS% or %HIT% result to a %CRIT% result."
    },
    "Tractor Beam": {
      display_name: "Tractor Beam",
      text: "<strong>Attack:</strong> If this attack hits, all %HIT%/%CRIT% results inflict tractor tokens instead of damage."
    },
    "Weapons Systems Officer": {
      text: "After you perform a special attack with the %LOCK% requirement, you may acquire a lock on the defender."
    },
    "Ion Torpedoes": {
      display_name: "Ion Torpedoes",
      text: "<strong>Attack (%LOCK%):</strong> Spend 1 %CHARGE%. If this attack hits, spend 1 %HIT% or %CRIT% result to cause the defender to suffer 1 %HIT% damage. All remaining %HIT%/%CRIT% results inflict ion tokens instead of damage."
    },
    'GNK "Gonk" Droid': {
      display_name: "GNK “Gonk” Droid",
      text: "<strong>Setup:</strong> Lose 1 %CHARGE%.%LINEBREAK%<strong>Action:</strong> Recover 1 %CHARGE%.%LINEBREAK%<strong>Action:</strong> Spend 1 %CHARGE% to recover 1 shield."
    },
    "Perceptive Copilot": {
      display_name: "Perceptive Copilot",
      text: "After you perform a %FOCUS% action, gain 1 focus token."
    },
    "Tactical Officer": {
      display_name: "Tactical Officer",
      text: "<i class = flavor_text>In the chaos of a starfighter battle, a single order can mean the difference between a victory and a massacre.</i>"
    },
    "Freelance Slicer": {
      display_name: "Freelance Slicer",
      text: "While you defend, before attack dice are rolled, you may spend a lock you have on the attacker to roll 1 attack die. If you do, the attacker gains 1 jam token. Then, on a %HIT% or %CRIT% result, gain 1 jam token."
    },
    "Collision Detector": {
      display_name: "Collision Detector",
      text: "While you boost or barrel roll, you can move through and overlap obstacles.%LINEBREAK%After you move through or overlap an obstacle, you may spend 1 %CHARGE% to ignore its effects until the end of the round."
    },
    "Watchful Astromech": {
      text: "After you perform a %RELOAD% or %ROTATEARC% action, if you are in an enemy ship's firing arc, you may perform a red %CALCULATE% action."
    },
    "Bistan": {
      display_name: "Bistan",
      text: "After you perform a primary attack, if you are focused, you may perform a bonus %SINGLETURRETARC% attack against a ship you have not already attacked this round."
    },
    "Pivot Wing": {
      display_name: "Pivot Wing",
      text: "<strong>Closed: </strong>While you defend, roll 1 fewer defense die.%LINEBREAK%After you execute a [0 %STOP%] maneuver, you may rotate your ship 90º or 180º.%LINEBREAK%Before you activate, you may flip this card.%LINEBREAK%<strong>Open:</Strong> Before you activate, you may flip this card."
    },
    "Sensitive Controls": {
      text: "Replace your <strong>Autothrusters</strong> ship ability with the following: %LINEBREAK% <strong>Sensitive Controls</strong>: During the System Phase, you may perform a red %BARRELROLL% or red %BOOST% action."
    },
    "Protectorate Gleb": {
      text: "After you coordinate a friendly ship, you may transfer 1 orange or red token to the ship you coordinated. %LINEBREAK% <i>Errata (RR: 1.2.0 [06/14/2021]): Added restriction stipulating friendly ship</i>"
    },
    "ISB Slicer": {
      display_name: "ISB Slicer",
      text: "During the End Phase, enemy ships at range 1-2 cannot remove jam tokens."
    },
    "Tactical Scrambler": {
      display_name: "Tactical Scrambler",
      text: "While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die."
    },
    "Fire-Control System": {
      display_name: "Fire-Control System",
      text: "While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack."
    },
    "Plasma Torpedoes": {
      display_name: "Plasma Torpedoes",
      text: "<strong>Attack (%LOCK%):</strong> Spend 1 %CHARGE%. During the Neutralize Results step, %CRIT% results are cancelled before %HIT% results. After this attack hits, the defender loses 1 shield."
    },
    "Feedback Array": {
      display_name: "Feedback Array",
      text: "Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 %HIT% damage."
    },
    "Swivel Wing": {
      text: "<strong>Swivel Wing (Down)</strong> %LINEBREAK% After you execute a [0 %STOP%] maneuver, you may rotate your ship 90º or 180º. If you do, you <b>must</b> flip this card. %LINEBREAK% <strong>Swivel Wing (Up)</strong> %LINEBREAK% While you defend, roll 1 fewer defense die. %LINEBREAK% After you fully execute a non-stationary [%STOP%] maneuver, you may flip this card."
    },
    "Vectored Cannons (RZ-1)": {
      text: "Gain a %SINGLETURRETARC% indicator. Treat the arc requirement of your %FRONTARC% primary attack as %SINGLETURRETARC%. %LINEBREAK% Replace your <strong>Vectored Thrusters</strong> ship ability with the following: %LINEBREAK%<strong>Vectored Cannons:</strong> During the System Phase, you may perform a red %BOOST% or red %ROTATEARC% action. You can rotate your %SINGLETURRETARC% indicator only to your %FRONTARC% or %REARARC%."
    },
    "Xg-1 Assault Configuration": {
      display_name: "Xg-1 Assault Configuration",
      text: "While you have exactly 1 disarm token, you can still perform %CANNON% attacks. While you perform a %CANNON% attack while disarmed, roll a maximum of 3 attack dice."
    },
    "Captain Hark": {
      display_name: "Captain Hark",
      text: "After you fully execute a red maneuver, if you are not focused, you may spend 1 %CHARGE% to gain 1 focus token."
    },
    "Gar Saxon": {
      display_name: "Gar Saxon",
      text: "While a friendly ship at range 1-3 with an initiative of 4 or lower performs an attack against a defender you have locked, the attacker may change 1 %FOCUS% result to a %HIT% result."
    },
    "Tiber Saxon": {
      display_name: "Tiber Saxon",
      text: "After you perform an attack at attack range 1-2 that hits, if the defender has no faceup damage cards, you may spend 1 or more %CHARGE%. For each %CHARGE% you spend, the defender gains 1 strain token."
    },
    "Electro-Chaff Missiles": {
      text: "During the System Phase, you may spend 1 %CHARGE% from this card to launch 1 electro-chaff cloud using the [3 %BANKLEFT%], [3 %BANKRIGHT%], or [4 %STRAIGHT%] template. Then place 1 fuse marker on it. %LINEBREAK% This card's %CHARGE% cannot be recovered.."
    },
    "Adv. Proton Torpedoes": {
      display_name: "Adv. Proton Torpedoes",
      text: "<strong>Attack (%LOCK%):</strong> Spend 1 %CHARGE%. Change 1 %HIT% result to a %CRIT% result."
    },
    "Heavy Laser Cannon": {
      display_name: "Heavy Laser Cannon",
      text: "<strong>Attack:</strong> After the Modify Attack Dice step, change all %CRIT% results to %HIT% results."
    },
    "Minister Tua": {
      display_name: "Minister Tua",
      text: "At the start of the Engagement Phase, if you are damaged, you may perform a red %REINFORCE% action."
    },
    "Beskar Reinforced Plating": {
      text: "While you defend, if the attacker is in your %FRONTARC%, before you would be dealt a faceup damage card, you may spend 1 %CHARGE% to be dealt that card facedown instead, or spend 2 %CHARGE% to discard it instead."
    },
    "Mandalorian Optics": {
      text: "During the System Phase, you may spend 1 %CHARGE% to acquire a lock on an object in your %FRONTARC%. %LINEBREAK% While you perform a primary attack, if you have a lock on the defender, ignore obstacles beyond range 0 obstructing the attack."
    },
    "Drop-Seat Bay": {
      text: "If you would drop a %CREW% remote using a [%STRAIGHT%] template, you may use a bank [%BANKLEFT% or %BANKRIGHT%] tempalte of the same speed instead and can alighn that template's middle line with the hashmark on your ship's left or right side instead of your rear guides."
    },
    'Imperial Super Commandos': {
      text: 'INIT: 2 <br> %FRONTARC%: 2 %RANGEBONUS%, RANGE: 1-2 <br>%AGILITY%: 2, %HULL%: 2, %CHARGE%: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% After an enemy ship overlaps you, it gains 1 strain token.%LINEBREAK% <strong>Activation Phase:</strong> At the start of this phase, you may relocate forward using a [1 %TURNLEFT%], [2 %STRAIGHT%], or [1 %TURNRIGHT%] template.%LINEBREAK% <strong>Engagement Phase:</strong> You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 %CHARGE%. While you perform an attack, you may change 1 %FOCUS% result to a %HIT% result.'
    }
  };
  condition_translations = {
    'Suppressive Fire': {
      text: 'While you perform an attack against a ship other than <strong>Captain Rex</strong>, roll 1 fewer attack die. %LINEBREAK% After <strong>Captain Rex</strong> defends, remove this card.  %LINEBREAK% At the end of the Combat Phase, if <strong>Captain Rex</strong> did not perform an attack this phase, remove this card. %LINEBREAK% After <strong>Captain Rex</strong> is destroyed, remove this card.'
    },
    'Hunted': {
      text: 'After you are destroyed, you must choose another friendly ship and assign this condition to it, if able.'
    },
    'Listening Device': {
      text: 'During the System Phase, if an enemy ship with the <strong>Informant</strong> upgrade is at range 0-2, flip your dial faceup.'
    },
    'Rattled': {
      text: 'After a bomb or mine at range 0-1 detonates, suffer 1 %CRIT%. Then, remove this card. %LINEBREAK% Action: If there are no bombs or mines at range 0-1, remove this card.'
    },
    'Optimized Prototype': {
      text: 'While you perform a %FRONTARC% primary attack against a ship locked by a friendly ship with the <strong>Director Krennic</strong> upgrade, you may spend 1 %HIT%/%CRIT%/%FOCUS% result. If you do, choose one: the defender loses 1 shield or the defender flips 1 of its facedown damage cards.'
    },
    'I\'ll Show You the Dark Side': {
      text: ' When this card is assigned, if there is no faceup damage card on it, the player who assigned it searches the damage deck for 1 Pilot damage card and places it faceup on this card. Then shuffle the damage deck. When you would suffer 1 %CRIT% damage, you are instead dealt the faceup damage card on this card. Then, remove this card. '
    },
    'Proton Bomb': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 suffers 1 %CRIT% damage.%LINEBREAK%<i>Errata (Official Rulings Thread 03/2019): Added: "and remote"</i>'
    },
    'Seismic Charge': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase this device detonates. When this device detonates, choose 1 obstacle at range 0-1. Each ship and remote at range 0-1 of the obstacle suffers 1 %HIT% damage. Then remove that obstacle.%LINEBREAK%<i>Errata (Official Rulings Thread 03/2019): Added: "and remote"</i> '
    },
    'Bomblet': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase this device detonates. When this device detonates, each ship and remote at range 0-1 rolls 2 attack dice. Each ship and remote suffers 1 %HIT% damage for each %HIT%/%CRIT% result.%LINEBREAK%<i>Errata (Official Rulings Thread 03/2019): Added: "and remote"</i>'
    },
    'Loose Cargo': {
      text: '<strong>Types:</strong> Obstacle, Placed %LINEBREAK% Loose cargo is a debris cloud.'
    },
    'Spare Parts': {
      text: '<strong>Types:</strong> Obstacle, Placed %LINEBREAK% Spare parts is a debris cloud. %LINEBREAK% When this object is dropped, fit the tab between the ship\'s rear guides.'
    },
    'Conner Net': {
      text: '<strong>Types:</strong> Device, Mine %LINEBREAK% After a ship overlaps or moves through this device, it detonates. When this device detonates, the ship suffers 1 %HIT% damage and gains 3 ion tokens.'
    },
    'Proximity Mine': {
      text: '<strong>Types:</strong> Device, Mine %LINEBREAK% After a ship overlaps or moves through this device, it detonates. When this device detonates, that ship rolls 2 attack dice. That ship then suffers 1 %HIT% plus 1 %HIT%/%CRIT% damage for each matching result.%LINEBREAK%<i>Errata (since rules reference 1.0.2): Added: "1 %HIT% plus"</i>'
    },
    'DRK-1 Probe Droid': {
      text: 'INIT: 0 <br>AGILITY: 3 <br>HULL: 1 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK%  <strong>System Phase:</strong> The DRK-1 probe droid\'s controlling player may choose a [2 %BANKLEFT%], [2 %STRAIGHT%] or [2 %BANKRIGHT%] template and any set of the DRK-1\'s guides. The player then relocates the remote, placing the DRK-1 at the other end of the template. It can be placed overlapping an object this way. %LINEBREAK%If the DRK-1 overlaps a ship, use the position marker to denote the ship\'s position, then place the ship on top of the remote. %LINEBREAK%<strong>Activation, Engagement, and End Phase:</strong> No effect. %LINEBREAK%<strong>Other Rules:</strong> While a ship locks an object or jams an enemy ship, it may measure range from a friendly DRK-1 probe droid. After an enemy ship executes a maneuver that causes it to overlap a DRK-1 probe droid, the ship\'s controller rolls 1 attack die. On a %FOCUS% result, the DRK-1 probe droid suffers 1 %HIT% damage.'
    },
    'Buzz Droid Swarm': {
      text: 'INIT: 0 <br>AGILITY: 1 <br>HULL: 1 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% <strong>System, Activation, and End Phase:</strong> No effect. %LINEBREAK%<strong>Engagement Phase:</strong> When you engage, each enemy ship at range 0 of the buzz droid swarm suffers 1 %CRIT% damage. %LINEBREAK%<strong>Other Rules:</strong> After an enemy ship overlaps or moves through a buzz droid swarm, the swarm\'s controlling player relocates it by aligning the tab to that ship\'s front or rear guides (this ship is at range 0 of the swarm). The swarm cannot be aligned to a set of the ship\'s guides if doing so would cause it to overlap an object. If the swarm cannot be placed at a chosen set of guides, its controlling player must align it to the other set of the ship\'s guides. If it cannot be aligned to the other set, the swarm and the enemy ship that overlapped or moved through it each suffer 1 %HIT% damage. %LINEBREAK%<i>Errata (since rules reference 1.4): Agility adjusted for balance.</i>'
    },
    'It\'s the Resistance': {
      text: '<strong>Setup:</strong> Start in reserve. %LINEBREAK% When you deploy, you are placed within range 1 of any table edge and beyond range 3 of any enemy ship. %LINEBREAK% At the start of the round, if all of the friendly <strong>GA-97</strong>\'s %CHARGE% are active, you <strong>must</strong> deploy. Then remove this card. After the friendly <strong>GA-97</strong> is destroyed, you <strong>must</strong> deploy. Then gain 1 disarm token and remove this card.'
    },
    'Electro-Proton Bomb': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK%  At the end of the Activation Phase this device detonates. When this device detonates, each ship and remote at range 0-2 rolls 4 attack dice. Each ship loses 1 shield for each blank result, gains 1 ion token for each %FOCUS%/%HIT% result, and gains 1 disarm token for each %CRIT% result. Each remote at range 0-1 loses 1 shield for each blank result and suffers 1 damage for each %FOCUS%/%HIT% result.'
    },
    'Decoyed': {
      text: 'While you defend, each friendly <strong>Naboo Handmaiden</strong> in the attack arc may spend 1 evade token to change one of your results to an %EVADE% result. %LINEBREAK% If you are a Naboo Royal N-1 Starfighter, each friendly <strong>Naboo Handmaiden</strong> in the attack arc may spend 1 evade token to add 1 %EVADE% result instead.'
    },
    'Compromising Intel': {
      text: 'During the System Phase, if the enemy <strong>Vi Moradi</strong> is at range 0-3, flip your dial faceup. %LINEBREAK% While you defend or perform an attack against the enemy <strong>Vi Moradi</strong>, you cannot spend focus tokens.'
    },
    'Cluster Mine': {
      text: '<strong>Types:</strong> Device, Mine %LINEBREAK%   A Cluster Mine Set consists of 3 individual Cluster Mine devices. %LINEBREAK% When a Cluster Mines set is placed, the center Cluster Mine is placed as normal, then two additional Cluster Mines are placed in the recesses as shown. %LINEBREAK% After a ship overlaps or moves through any individual Cluster Mine, it detonates. Other Cluster Mines in the set that were not overlapped or moved through do not detonate. %LINEBREAK% When each of these devices detonates, that ship rolls 2 attack dice. That ship then suffers 1 %HIT%/%CRIT% damage for each matching result.'
    },
    'Ion Bomb': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-1 gains 3 ion tokens, and each remote at range 0-1 suffers 1 %HIT% damage.'
    },
    'Concussion Bomb': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 is dealt 1 facedown damage card. Then, each ship at range 0-1 must expose 1 damage card unless it chooses to gain 1 strain token.'
    },
    'Thermal Detonator': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 rolls 1 attack die. Each ship gains 1 strain token for each %FOCUS% result, and each ship and remote suffers 1 %HIT%/%CRIT% damage for each matching result.'
    },
    'Sensor Buoy': {
      text: 'INIT: 0 <br>AGILITY: 3 <br>HULL: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% Sensor buoys are remotes that come in pairs (one red, and one blue, each with its own remote card), and are placed by the <strong>Sensor Buoy Suite</strong> upgrade card. Beyond being remotes and interacting with that card, they have no additional rules.'
    },
    'Electro-Chaff Cloud': {
      text: 'An electro-chaff cloud is a device and an obstacle. %LINEBREAK% During the End Phase, remove each electro-chaff cloud with no fuse markers, then remove one fuse marker from each electro-chaff cloud. An electro-chaff cloud can never have more than one fuse token.'
    },
    'Tracking Torpedoes': {
      text: 'INIT: 0 <br>AGILITY: 3 <br>HULL: 3 %LINEBREAK% <strong>System Phase:</strong> At this remote\'s initiative, its controlling player relocates this remote forward using the [3 %BANKLEFT%], [3 %BANKRIGHT%], or [4 %STRAIGHT%] template. %LINEBREAK% <strong>Activation Phase:</strong> No effect. %LINEBREAK% <strong>Engagement Phase:</strong> At this remote\'s initiative, if an object on which it has a lock is in its %FRONTARC% at range 0-1, this remote detonates. End Phase: During the End Phase, if this remote does not have a lock on any object, this remote must acquire a lock on an object in its %FRONTARC% at range 1-3, if able. %LINEBREAK% <strong>Other Rules:</strong> After this remote is destroyed, roll 1 attack die. On a %HIT% or %CRIT% result, this remote detonates. %LINEBREAK% When this remote detonates, each ship, remote, and structure at range 0 or in its %FRONTARC% at range 1 rolls 4 attack dice and suffers 1 damage for each matching %HIT% or %CRIT% result.'
    },
    'Fearful Prey': {
      text: 'After you defend against an enemy <strong>Fearsome Predator</strong>, if you did not spend at least 1 green token during the attack, gain 1 strain token.'
    },
    'You Should Thank Me': {
      text: 'This condition is assigned facedown. Reveal it after you defend. %LINEBREAK% After you defend, <strong>Zam Wesell</strong> recovers 1 %CHARGE%. Then, you may acquire a lock on the attacker. %LINEBREAK% At the end of the Engagement Phase, if this card is facedown and you are in an enemy ship\'s firing arc, you may reveal this card and spend 2 %CHARGE% from <strong>Zam Wesell</strong>. If you do, you may perform a bonus attack. %LINEBREAK% At the start of the System Phase, remove this condition.'
    },
    'You\'d Better Mean Business': {
      text: 'This condition is assigned facedown. Reveal it after you defend. %LINEBREAK% After you defend, you may spend 2 %CHARGE% from <strong>Zam Wesell</strong>. If you do, perform a bonus attack against the attacker. %LINEBREAK% At the end of the Engagement Phase, if this card is facedown and you are in an enemy ship\'s firing arc, you may reveal this card. If you do, <strong>Zam Wesell</strong> recovers 2 %CHARGE%. %LINEBREAK% At the start of the System Phase, remove this condition.'
    },
    'Merciless Pursuit': {
      text: 'After you perform an attack, if the defender is equipped with <b>The Child</b>, you may acquire a lock on the defender.'
    },
    'Marked for Elimination': {
      text: 'While you defend, if the attacker is equipped with <b>Tracking Fob</b> and has a lock on you, you cannot spend green tokens.'
    },
    'False Friend': {
      text: 'During the System Phase, if an enemy ship with the <b>Tal Merrik</b> upgrade is at range 0-2 or an enemy remote is at range 0-2, flip your dial faceup. %LINEBREAK% <strong>Action:</strong> Gain 1 deplete token and stress token to discard this condition.'
    },
    'Trials of the Darksaber': {
      text: 'While you perform an attack at attack range 0-2, you may spend 1 %CRIT% result. If you do, if the defending ship\'s player has scored more %POINT% than you, they lose 1 scored %POINT%. Place thatt %POINT% on this card. %LINEBREAK% After you defend, if you are destroyed by an enemy ship at attack range 0-2, assign the <b>Trials of the Darksaber</b> condition to the attacker (all %POINT% remain on this card). %LINEBREAK%. At the end of the game, this ship scores all %POINT% on this card.'
    },
    'Blazer Bomb': {
      text: '<strong>Types:</strong> Device, Bomb %LINEBREAK% At the end of the Activation Phase, this device detonates. %LINEBREAK% When this device detonates, each ship and remote at range 0-1 rolls 1 attack die. Each ship or remote suffers 1 %HIT% damage for each %HIT%/%CRIT% result. %LINEBREAK% After this devices detonates, place a Blaze by aligning the Blaze\'s guides to the device\'s tab. %LINEBREAK% A Blaze is an obstacle. After this obstacle is placed, place a fues marker on it. %LINEBREAK% During the End Phase, remove each Blaze with no fuse markers, then remove 1 fuse marker from each Blaze.'
    },
    'Clan Wren Commandos': {
      text: 'INIT: 2 <br> %FRONTARC%: 2 %RANGEBONUS%, RANGE: 1-2 <br>%AGILITY%: 2, %HULL%: 2, %CHARGE%: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% After an enemy ship overlaps you, it gains 1 strain token. %LINEBREAK% <strong>Activation Phase:</strong> At the start of this phase, you may relocate forward using a [1 %TURNLEFT%], [2 %STRAIGHT%], or [1 %TURNRIGHT%] template.%LINEBREAK% <strong>Engagement Phase:</strong> You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 %CHARGE%. While you perform an attack, you may change 1 %FOCUS% result to a %HIT% result.'
    },
    'Death Watch Commandos': {
      text: 'INIT: 2 <br> %FRONTARC%: 2 %RANGEBONUS%, RANGE: 1-2 <br>%AGILITY%: 2, %HULL%: 2, %CHARGE%: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% After an enemy ship overlaps you, it gains 1 strain token.%LINEBREAK% <strong>Activation Phase:</strong> At the start of this phase, you may relocate forward using a [1 %TURNLEFT%], [2 %STRAIGHT%], or [1 %TURNRIGHT%] template.%LINEBREAK% <strong>Engagement Phase:</strong> You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 %CHARGE%. While you perform an attack, you may change 1 %FOCUS% result to a %HIT% result.'
    },
    'Nite Owl Commandos': {
      text: 'INIT: 2 <br> %FRONTARC%: 2 %RANGEBONUS%, RANGE: 1-2 <br>%AGILITY%: 2, %HULL%: 2, %CHARGE%: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% After an enemy ship overlaps you, it gains 1 strain token.%LINEBREAK% <strong>Activation Phase:</strong> At the start of this phase, you may relocate forward using a [1 %TURNLEFT%], [2 %STRAIGHT%], or [1 %TURNRIGHT%] template.%LINEBREAK% <strong>Engagement Phase:</strong> You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 %CHARGE%. While you perform an attack, you may change 1 %FOCUS% result to a %HIT% result.'
    },
    'Imperial Super Commandos': {
      text: 'INIT: 2 <br> %FRONTARC%: 2 %RANGEBONUS%, RANGE: 1-2 <br>%AGILITY%: 2, %HULL%: 2, %CHARGE%: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% After an enemy ship overlaps you, it gains 1 strain token.%LINEBREAK% <strong>Activation Phase:</strong> At the start of this phase, you may relocate forward using a [1 %TURNLEFT%], [2 %STRAIGHT%], or [1 %TURNRIGHT%] template.%LINEBREAK% <strong>Engagement Phase:</strong> You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 %CHARGE%. While you perform an attack, you may change 1 %FOCUS% result to a %HIT% result.'
    },
    'Mandalorian Super Commandos': {
      text: 'INIT: 2 <br> %FRONTARC%: 2 %RANGEBONUS%, RANGE: 1-2 <br>%AGILITY%: 2, %HULL%: 2, %CHARGE%: 2 %LINEBREAK% <strong>Types:</strong> Device, Remote %LINEBREAK% After an enemy ship overlaps you, it gains 1 strain token.%LINEBREAK% <strong>Activation Phase:</strong> At the start of this phase, you may relocate forward using a [1 %TURNLEFT%], [2 %STRAIGHT%], or [1 %TURNRIGHT%] template.%LINEBREAK% <strong>Engagement Phase:</strong> You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 %CHARGE%. While you perform an attack, you may change 1 %FOCUS% result to a %HIT% result.'
    },
    'Guarded': {
      text: 'While you defend, if you are not in the attacker\'s %BULLSEYEARC%, roll 1 additional defense die for each friendly calculating or evading <b>MagnaGuard Protector</b> in the attack arc.'
    }
  };
  chassis_translations = {
    "Vectored Thrusters": {
      display_name: "Vectored Thrusters",
      text: "After you perform an action, you may perform a red %BOOST% action."
    },
    "Advanced Targeting Computer": {
      display_name: "Advanced Targeting Computer",
      text: "While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 %HIT% result to a %CRIT% result."
    },
    "Autothrusters": {
      display_name: "Autothrusters",
      text: "After you perform an action, you may perform a red %BARRELROLL% or red %BOOST% action."
    },
    "Nimble Bomber": {
      display_name: "Nimble Bomber",
      text: "If you would drop a device using a %STRAIGHT% template, you may use a %BANKLEFT% or %BANKRIGHT% template of the same speed instead."
    },
    "Full Throttle": {
      display_name: "Full Throttle",
      text: "After you fully execute a speed 3-5 maneuver, you may perform an %EVADE% action."
    },
    "Experimental Scanners": {
      display_name: "Experimental Scanners",
      text: "You can acquire locks beyond range 3. You cannot acquire locks at range 1."
    },
    "Stygium Array": {
      display_name: "Stygium Array",
      text: "After you decloak, you may perform an %EVADE% action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token."
    },
    "Sensor Blindspot": {
      display_name: "Sensor Blindspot",
      text: "While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die."
    },
    "Microthrusters": {
      display_name: "Microthrusters",
      text: "While you perform a barrel roll, you <b>must</b> use the %BANKLEFT% or %BANKRIGHT% template instead of the %STRAIGHT% template."
    },
    "Weapon Hardpoint": {
      display_name: "Weapon Hardpoint",
      text: "You can equip 1 %CANNON%, %TORPEDO%, or %MISSILE% upgrade."
    },
    "Advanced Droid Brain": {
      display_name: "Advanced Droid Brain",
      text: "After you perform a %CALCULATE% action, gain 1 calculate token."
    },
    "Tail Gun": {
      display_name: "Tail Gun",
      text: "While you have a docked ship, you have a primary %REARARC% weapon with an attack value equal to your docked ship's primary %FRONTARC% attack value."
    },
    "Locked and Loaded": {
      display_name: "Locked and Loaded",
      text: "While you are docked, after your carrier ship performs a primary %FRONTARC% or %TURRET% attack, it may perform a bonus primary %REARARC% attack."
    },
    "Concordia Faceoff": {
      display_name: "Concordia Faceoff",
      text: "While you defend, if the attack range is 1 and you are in the attacker's %FRONTARC%, change 1 result to an %EVADE% result."
    },
    "Spacetug Tractor Array": {
      display_name: "Spacetug Tractor Array",
      text: " <strong>Action:</strong> Choose a ship in your %FRONTARC% at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your %BULLSEYEARC% at range 1."
    },
    "Hope": {
      display_name: "Hope",
      text: "After another friendly ship at range 0-3 is destroyed, you may perform a %FOCUS% or %BOOST% action."
    },
    "Sensitive Controls": {
      display_name: "Sensitive Controls",
      text: "During the System Phase, you may perform a red %BARRELROLL% or red %BOOST% action."
    },
    "Vectored Cannons": {
      display_name: "Vectored Cannons",
      text: "During the System Phase, you may perform a red %BOOST% or red %ROTATEARC% action. You can rotate your %SINGLETURRETARC% indicator only to your %FRONTARC% or %REARARC%."
    },
    "Advanced Fire Control": {
      display_name: "Advanced Fire Control",
      text: "After you perform a %CANNON% or %MISSILE% attack, if you have a lock on the defender, you may perform a bonus primary attack against the defender."
    },
    "Networked Calculations": {
      display_name: "Networked Calculations",
      text: "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 %FOCUS% result to an %EVADE% or %HIT% result."
    },
    "Independent Calculations": {
      display_name: "Independent Calculations",
      text: "While you perform a white %CALCULATE% action, you may treat it as red to gain 1 additional calculate token. Other ships cannot spend your calculate tokens using the <strong>Networked Calculations</strong> ship ability."
    },
    "Adaptive Ailerons": {
      display_name: "Adaptive Ailerons",
      text: "Before you reveal your dial, if you are not stressed, you <b>must</b> boost.  %LINEBREAK% <i>Errata (since rules reference 1.4.2): Changed ship ability</i>"
    },
    "Pursuit Craft": {
      display_name: "Pursuit Craft",
      text: "After you deploy, you may acquire a lock on a ship the friendly <strong>Hound's Tooth</strong> has locked."
    },
    "Dead to Rights": {
      display_name: "Dead to Rights",
      text: "While you perform an attack, if the defender is in your %BULLSEYEARC%, defense dice cannot be modified using green tokens."
    },
    "Comms Shuttle": {
      display_name: "Comms Shuttle",
      text: "While you are docked, your carrier ship gains %COORDINATE%. Before your carrier ship activates, it may perform a %COORDINATE% action."
    },
    "Controlled Ailerons": {
      display_name: "Controlled Ailerons",
      text: "Before you reveal your dial, if you are not stressed, you may boost. %LINEBREAK% <i>Errata (since rules reference 1.4.2): Changed ship ability</i>"
    },
    "Co-Pilot": {
      display_name: "Co-Pilot",
      text: "While you are docked, your carrier ship has your pilot ability in addition to its own."
    },
    "Rigged Energy Cells": {
      display_name: "Rigged Energy Cells",
      text: "During the System Phase, if you are not docked, lose 1 %CHARGE%. At the end of the Activation Phase, if you have 0 %CHARGE%, you are destroyed. Before you are removed, each ship at range 0-1 suffers 1 %CRIT% damage."
    },
    "Refined Gyrostabilizers": {
      display_name: "Refined Gyrostabilizers",
      text: "You can rotate your %SINGLETURRETARC% indicator only to your %FRONTARC% or %REARARC%. After you perform an action, you may perform a red %BOOST% or red %ROTATEARC% action."
    },
    "Heavy Weapon Turret": {
      display_name: "Heavy Weapon Turret",
      text: "You can rotate your %SINGLETURRETARC% indicator only to your %FRONTARC% or %REARARC%. You <b>must</b> treat the %FRONTARC% requirement of your equipped %MISSILE% upgrades as %SINGLETURRETARC%."
    },
    "Linked Battery": {
      display_name: "Linked Battery",
      text: "While you perform a %CANNON% attack, roll 1 additional die."
    },
    "Notched Stabilizers": {
      display_name: "Notched Stabilizers",
      text: "While you move, you ignore asteroids."
    },
    "Fine-Tuned Controls": {
      display_name: "Fine-Tuned Controls",
      text: "After you fully execute a maneuver, you may spend 1 %FORCE% to perform a %BOOST% or %BARRELROLL% action."
    },
    "Pinpoint Tractor Array": {
      display_name: "Pinpoint Tractor Array",
      text: "You cannot rotate your %SINGLETURRETARC% to your %REARARC%. After you fully execute a maneuver, you may gain 1 tractor token to perform a %ROTATEARC% action. %LINEBREAK%<i>Errata (since rules reference 1.4): added \"fully\"</i>"
    },
    "Plated Hull": {
      display_name: "Plated Hull",
      text: "While you defend, if you are not critically damaged, change 1 %CRIT% to a %HIT% result."
    },
    "Explosion with Wings": {
      display_name: "Explosion with Wings",
      text: "You are dealt 1 facedown damage card. After you perform a %SLAM% action, you may expose 1 damage card to remove 1 disarm token."
    },
    "Fine-Tuned Thrusters": {
      display_name: "Fine-Tuned Thrusters",
      text: "After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a %LOCK% or %BARRELROLL% action."
    },
    "Networked Aim": {
      display_name: "Networked Aim",
      text: "You cannot spend your locks to reroll attack dice. While you perform an attack, you may reroll a number of attack dice up to the number of friendly locks on the defender."
    },
    "Fire Convergence": {
      display_name: "Fire Convergence",
      text: "While a friendly ship performs a non-%SINGLETURRETARC% attack, if the defender is in your turret arc you may spend 1 charge token, if you do the attacker may reroll up to 2 results."
    },
    "Rotating Cannons": {
      display_name: "Rotating Cannons",
      text: "You can rotate your %SINGLETURRETARC% indicator only to your %FRONTARC% or %REARARC%. You must treat the %FRONTARC% requirement of your equipped %CANNON% upgrades as %SINGLETURRETARC%."
    },
    "Twin Ion Engines": {
      display_name: "Twin Ion Engines",
      text: "Ignore the \"TIE\" ship restriction on upgrade cards."
    },
    "Intuitive Controls": {
      display_name: "Intuitive Controls",
      text: "During the System Phase, you may perform a purple %BARRELROLL% or purple %BOOST% action."
    },
    "Intuitive Interface": {
      display_name: "Intuitive Interface",
      text: "After you perform an action added to your action bar by a %TALENT%, %ILLICIT%, or %MODIFICATION% upgrade, you may perform a %CALCULATE% action."
    },
    "Devastating Barrage": {
      display_name: "Devastating Barrage",
      text: "While you perform a %TORPEDO% or %MISSILE% attack, if the defender is in your %BULLSEYEARC%, your %CRIT% results cannot be cancelled by %EVADE% results."
    },
    "Pursuit Thrusters": {
      display_name: "Pursuit Thrusters",
      text: "During the System Phase, you may perform a %BOOST% action."
    },
    "Versatile Frame": {
      display_name: "Versatile Frame",
      text: "You can equip 1 %TORPEDO% or %MISSILE% upgrade. While your revealed maneuver is blue, add white %BOOST% to your action bar."
    }
  };
  for (name in pilot_translations) {
    data = pilot_translations[name];
    if (data.display_name == null) {
      data['display_name'] = name;
    }
  }
  for (name in upgrade_translations) {
    data = upgrade_translations[name];
    if (data.display_name == null) {
      data['display_name'] = name;
    }
  }
  for (name in condition_translations) {
    data = condition_translations[name];
    if (data.display_name == null) {
      data['display_name'] = name;
    }
  }
  for (name in chassis_translations) {
    data = chassis_translations[name];
    if (data.display_name == null) {
      data['display_name'] = name;
    }
  }
  return exportObj.setupTranslationCardData(pilot_translations, upgrade_translations, condition_translations, chassis_translations);
};

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

if ((_base = String.prototype).startsWith == null) {
  _base.startsWith = function(t) {
    return this.indexOf(t === 0);
  };
}

sortWithoutQuotes = function(a, b, type) {
  var a_name, b_name;
  if (type == null) {
    type = '';
  }
  a_name = displayName(a, type).replace(/[^a-z0-9]/ig, '');
  b_name = displayName(b, type).replace(/[^a-z0-9]/ig, '');
  if (a_name < b_name) {
    return -1;
  } else if (a_name > b_name) {
    return 1;
  } else {
    return 0;
  }
};

displayName = function(name, type) {
  var obj;
  obj = void 0;
  if (type === 'ship') {
    obj = exportObj.ships[name];
  } else if (type === 'upgrade') {
    obj = exportObj.upgrades[name];
  } else if (type === 'pilot') {
    obj = exportObj.pilots[name];
  } else {
    return name;
  }
  if (obj && obj.display_name) {
    return obj.display_name;
  }
  return name;
};

exportObj.manifestBySettings = {
  'collectioncheck': true
};

exportObj.manifestByExpansion = null;

exportObj.Collection = (function() {
  function Collection(args) {
    var _ref, _ref1, _ref2;
    this.expansions = (_ref = args.expansions) != null ? _ref : {};
    this.singletons = (_ref1 = args.singletons) != null ? _ref1 : {};
    this.checks = (_ref2 = args.checks) != null ? _ref2 : {};
    this.backend = args.backend;
    this.setupUI();
    this.setupHandlers();
    this.reset();
    this.language = 'English';
  }

  Collection.prototype.reset = function() {
    var card, card_different_by_type, card_totals_by_type, component_content, contents, count, counts, expansion, expname, item, items, name, names, singletonsByType, sorted_names, summary, thing, things, type, ul, _, _base1, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _n, _name, _name1, _name2, _o, _p, _ref, _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    this.shelf = {};
    this.table = {};
    _ref = this.expansions;
    for (expansion in _ref) {
      count = _ref[expansion];
      try {
        count = parseInt(count);
      } catch (_error) {
        count = 0;
      }
      for (_ = _i = 0; 0 <= count ? _i < count : _i > count; _ = 0 <= count ? ++_i : --_i) {
        _ref2 = (_ref1 = exportObj.manifestByExpansion[expansion]) != null ? _ref1 : [];
        for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
          card = _ref2[_j];
          for (_ = _k = 0, _ref3 = card.count; 0 <= _ref3 ? _k < _ref3 : _k > _ref3; _ = 0 <= _ref3 ? ++_k : --_k) {
            ((_base1 = ((_base2 = this.shelf)[_name1 = card.type] != null ? _base2[_name1] : _base2[_name1] = {}))[_name = card.name] != null ? _base1[_name] : _base1[_name] = []).push(expansion);
          }
        }
      }
    }
    _ref4 = this.singletons;
    for (type in _ref4) {
      counts = _ref4[type];
      for (name in counts) {
        count = counts[name];
        if (count > 0) {
          for (_ = _l = 0; 0 <= count ? _l < count : _l > count; _ = 0 <= count ? ++_l : --_l) {
            ((_base3 = ((_base4 = this.shelf)[type] != null ? _base4[type] : _base4[type] = {}))[name] != null ? _base3[name] : _base3[name] = []).push('singleton');
          }
        } else if (count < 0) {
          for (_ = _m = 0; 0 <= count ? _m < count : _m > count; _ = 0 <= count ? ++_m : --_m) {
            if (((_base5 = ((_base6 = this.shelf)[type] != null ? _base6[type] : _base6[type] = {}))[name] != null ? _base5[name] : _base5[name] = []).length > 0) {
              this.shelf[type][name].pop();
            }
          }
        }
      }
    }
    this.counts = {};
    _ref5 = this.shelf;
    for (type in _ref5) {
      if (!__hasProp.call(_ref5, type)) continue;
      _ref6 = this.shelf[type];
      for (thing in _ref6) {
        if (!__hasProp.call(_ref6, thing)) continue;
        if ((_base7 = ((_base8 = this.counts)[type] != null ? _base8[type] : _base8[type] = {}))[thing] == null) {
          _base7[thing] = 0;
        }
        this.counts[type][thing] += this.shelf[type][thing].length;
      }
    }
    singletonsByType = {};
    _ref7 = exportObj.manifestByExpansion;
    for (expname in _ref7) {
      items = _ref7[expname];
      for (_n = 0, _len1 = items.length; _n < _len1; _n++) {
        item = items[_n];
        (singletonsByType[_name2 = item.type] != null ? singletonsByType[_name2] : singletonsByType[_name2] = {})[item.name] = true;
      }
    }
    for (type in singletonsByType) {
      names = singletonsByType[type];
      sorted_names = ((function() {
        var _results;
        _results = [];
        for (name in names) {
          _results.push(name);
        }
        return _results;
      })()).sort(function(a, b) {
        return sortWithoutQuotes(a, b, type);
      });
      singletonsByType[type] = sorted_names;
    }
    component_content = $(this.modal.find('.collection-inventory-content'));
    component_content.text('');
    card_totals_by_type = {};
    card_different_by_type = {};
    _ref8 = this.counts;
    for (type in _ref8) {
      if (!__hasProp.call(_ref8, type)) continue;
      things = _ref8[type];
      if (singletonsByType[type] != null) {
        card_totals_by_type[type] = 0;
        card_different_by_type[type] = 0;
        contents = component_content.append($.trim("<div class=\"row\">\n    <div class=\"col\"><h5>" + (type.capitalize()) + "</h5></div>\n</div>\n<div class=\"row\">\n    <ul id=\"counts-" + type + "\" class=\"col\"></ul>\n</div>"));
        ul = $(contents.find("ul#counts-" + type));
        _ref9 = Object.keys(things).sort(function(a, b) {
          return sortWithoutQuotes(a, b, type);
        });
        for (_o = 0, _len2 = _ref9.length; _o < _len2; _o++) {
          thing = _ref9[_o];
          card_totals_by_type[type] += things[thing];
          if (__indexOf.call(singletonsByType[type], thing) >= 0) {
            card_different_by_type[type]++;
            if (type === 'pilot') {
              ul.append("<li>" + (exportObj.pilots[thing].display_name ? exportObj.pilots[thing].display_name : thing) + " - " + things[thing] + "</li>");
            }
            if (type === 'upgrade') {
              ul.append("<li>" + (exportObj.upgrades[thing].display_name ? exportObj.upgrades[thing].display_name : thing) + " - " + things[thing] + "</li>");
            }
            if (type === 'ship') {
              ul.append("<li>" + (exportObj.ships[thing].display_name ? exportObj.ships[thing].display_name : thing) + " - " + things[thing] + "</li>");
            }
          }
        }
      }
    }
    summary = "";
    _ref10 = Object.keys(card_totals_by_type);
    for (_p = 0, _len3 = _ref10.length; _p < _len3; _p++) {
      type = _ref10[_p];
      summary += "<li>" + (type.capitalize()) + " - " + card_totals_by_type[type] + " (" + card_different_by_type[type] + " different)</li>";
    }
    return component_content.append($.trim("<div class=\"row\">\n    <div class=\"col\"><h5>Summary</h5></div>\n</div>\n<div class = \"row\">\n    <ul id=\"counts-summary\" class=\"col\">\n        " + summary + "\n    </ul>\n</div>"));
  };

  Collection.prototype.check = function(where, type, name) {
    var _ref, _ref1, _ref2;
    return ((_ref = ((_ref1 = ((_ref2 = where[type]) != null ? _ref2 : {})[name]) != null ? _ref1 : []).length) != null ? _ref : 0) !== 0;
  };

  Collection.prototype.checkShelf = function(type, name) {
    return this.check(this.shelf, type, name);
  };

  Collection.prototype.checkTable = function(type, name) {
    return this.check(this.table, type, name);
  };

  Collection.prototype.use = function(type, name) {
    var card, e, _base1, _base2;
    try {
      card = this.shelf[type][name].pop();
    } catch (_error) {
      e = _error;
      if (card == null) {
        return false;
      }
    }
    if (card != null) {
      ((_base1 = ((_base2 = this.table)[type] != null ? _base2[type] : _base2[type] = {}))[name] != null ? _base1[name] : _base1[name] = []).push(card);
      return true;
    } else {
      return false;
    }
  };

  Collection.prototype.release = function(type, name) {
    var card, e, _base1, _base2;
    try {
      card = this.table[type][name].pop();
    } catch (_error) {
      e = _error;
      if (card == null) {
        return false;
      }
    }
    if (card != null) {
      ((_base1 = ((_base2 = this.shelf)[type] != null ? _base2[type] : _base2[type] = {}))[name] != null ? _base1[name] : _base1[name] = []).push(card);
      return true;
    } else {
      return false;
    }
  };

  Collection.prototype.save = function(cb) {
    if (cb == null) {
      cb = $.noop;
    }
    if (this.backend != null) {
      return this.backend.saveCollection(this, cb);
    }
  };

  Collection.load = function(backend, cb) {
    return backend.loadCollection(cb);
  };

  Collection.prototype.setupUI = function() {
    var collection_content, count, expansion, expname, input, item, items, name, names, pilot, pilotcollection_content, row, ship, shipcollection_content, singletonsByType, sorted_names, type, upgrade, upgradecollection_content, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _name, _ref, _ref1, _ref10, _ref11, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results;
    singletonsByType = {};
    _ref = exportObj.manifestByExpansion;
    for (expname in _ref) {
      items = _ref[expname];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        (singletonsByType[_name = item.type] != null ? singletonsByType[_name] : singletonsByType[_name] = {})[item.name] = true;
      }
    }
    for (type in singletonsByType) {
      names = singletonsByType[type];
      sorted_names = ((function() {
        var _results;
        _results = [];
        for (name in names) {
          _results.push(name);
        }
        return _results;
      })()).sort(function(a, b) {
        return sortWithoutQuotes(a, b, type);
      });
      singletonsByType[type] = sorted_names;
    }
    this.modal = $(document.createElement('DIV'));
    this.modal.addClass('modal fade collection-modal d-print-none');
    this.modal.tabindex = "-1";
    this.modal.role = "dialog";
    $('body').append(this.modal);
    this.modal.append($.trim("<div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4>Your Collection</h4>\n            <button type=\"button\" class=\"close d-print-none\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            <ul class=\"nav nav-pills mb-2\" id=\"collectionTabs\" role=\"tablist\">\n                <li class=\"nav-item active\" id=\"collection-expansions-tab\" role=\"presentation\"><a data-target=\"#collection-expansions\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"collection-expansions\" aria-selected=\"true\">Expansions</a><li>\n                <li class=\"nav-item\" id=\"collection-ships-tab\" role=\"presentation\"><a href=\"#collection-ships\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"collection-ships\" aria-selected=\"false\">Ships</a><li>\n                <li class=\"nav-item\" id=\"collection-pilots-tab\" role=\"presentation\"><a href=\"#collection-pilots\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"collection-pilots\" aria-selected=\"false\">Pilots</a><li>\n                <li class=\"nav-item\" id=\"collection-upgrades-tab\" role=\"presentation\"><a href=\"#collection-upgrades\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"collection-upgrades\" aria-selected=\"false\">Upgrades</a><li>\n                <li class=\"nav-item\" id=\"collection-components-tab\" role=\"presentation\"><a href=\"#collection-components\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"collection-components\" aria-selected=\"false\">Inventory</a><li>\n            </ul>\n            <div class=\"tab-content\" id=\"collectionTabContent\">\n                <div id=\"collection-expansions\" role=\"tabpanel\" aria-labelledby=\"collection-expansions-tab\" class=\"tab-pane fade show active container-fluid collection-content\"></div>\n                <div id=\"collection-ships\" role=\"tabpanel\" aria-labelledby=\"collection-ships-tab\" class=\"tab-pane fade container-fluid collection-ship-content\"></div>\n                <div id=\"collection-pilots\" role=\"tabpanel\" aria-labelledby=\"collection-pilots-tab\" class=\"tab-pane fade container-fluid collection-pilot-content\"></div>\n                <div id=\"collection-upgrades\" role=\"tabpanel\" aria-labelledby=\"collection-upgrades-tab\" class=\"tab-pane fade container-fluid collection-upgrade-content\"></div>\n                <div id=\"collection-components\" role=\"tabpanel\" aria-labelledby=\"collection-components-tab\" class=\"tab-pane fade container-fluid collection-inventory-content\"></div>\n            </div>\n        </div>\n        <div class=\"modal-footer d-print-none\">\n            <span class=\"collection-status\"></span>\n            &nbsp;\n            <label class=\"checkbox-check-collection\">\n                Check Collection Requirements <input type=\"checkbox\" class=\"check-collection\"/>\n            </label>\n            &nbsp;\n            <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n        </div>\n    </div>\n</div>"));
    this.modal_status = $(this.modal.find('.collection-status'));
    if (this.checks.collectioncheck != null) {
      if (this.checks.collectioncheck !== "false") {
        this.modal.find('.check-collection').prop('checked', true);
      }
    } else {
      this.checks.collectioncheck = true;
      this.modal.find('.check-collection').prop('checked', true);
    }
    this.modal.find('.checkbox-check-collection').show();
    collection_content = $(this.modal.find('.collection-content'));
    _ref1 = exportObj.expansions;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      expansion = _ref1[_j];
      count = parseInt((_ref2 = this.expansions[expansion]) != null ? _ref2 : 0);
      row = $.parseHTML($.trim("<div class=\"row\">\n    <div class=\"col\">\n        <label>\n            <input class=\"expansion-count\" type=\"number\" size=\"3\" value=\"" + count + "\" />\n            <span class=\"expansion-name\">" + expansion + "</span>\n        </label>\n    </div>\n</div>"));
      input = $($(row).find('input'));
      input.data('expansion', expansion);
      input.closest('div').css('background-color', this.countToBackgroundColor(input.val()));
      $(row).find('.expansion-name').data('name', expansion);
      if (expansion !== 'Loose Ships' || 'Hyperspace') {
        collection_content.append(row);
      }
    }
    shipcollection_content = $(this.modal.find('.collection-ship-content'));
    _ref3 = singletonsByType.ship;
    for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
      ship = _ref3[_k];
      count = parseInt((_ref4 = (_ref5 = this.singletons.ship) != null ? _ref5[ship] : void 0) != null ? _ref4 : 0);
      row = $.parseHTML($.trim("<div class=\"row\">\n    <div class=\"col\">\n        <label>\n            <input class=\"singleton-count\" type=\"number\" size=\"3\" value=\"" + count + "\" />\n            <span class=\"ship-name\">" + (exportObj.ships[ship].display_name ? exportObj.ships[ship].display_name : ship) + "</span>\n        </label>\n    </div>\n</div>"));
      input = $($(row).find('input'));
      input.data('singletonType', 'ship');
      input.data('singletonName', ship);
      input.closest('div').css('background-color', this.countToBackgroundColor(input.val()));
      $(row).find('.ship-name').data('name', ship);
      shipcollection_content.append(row);
    }
    pilotcollection_content = $(this.modal.find('.collection-pilot-content'));
    _ref6 = singletonsByType.pilot;
    for (_l = 0, _len3 = _ref6.length; _l < _len3; _l++) {
      pilot = _ref6[_l];
      count = parseInt((_ref7 = (_ref8 = this.singletons.pilot) != null ? _ref8[pilot] : void 0) != null ? _ref7 : 0);
      row = $.parseHTML($.trim("<div class=\"row\">\n    <div class=\"col\">\n        <label>\n            <input class=\"singleton-count\" type=\"number\" size=\"3\" value=\"" + count + "\" />\n            <span class=\"pilot-name\"><i class=\"xwing-miniatures-ship xwing-miniatures-ship-" + (exportObj.ships[exportObj.pilots[pilot].ship].icon ? exportObj.ships[exportObj.pilots[pilot].ship].icon : exportObj.ships[exportObj.pilots[pilot].ship].xws) + "\"></i> " + (exportObj.pilots[pilot].display_name ? exportObj.pilots[pilot].display_name : pilot) + "</span>\n        </label>\n    </div>\n</div>"));
      input = $($(row).find('input'));
      input.data('singletonType', 'pilot');
      input.data('singletonName', pilot);
      input.closest('div').css('background-color', this.countToBackgroundColor(input.val()));
      $(row).find('.pilot-name').data('name', pilot);
      pilotcollection_content.append(row);
    }
    upgradecollection_content = $(this.modal.find('.collection-upgrade-content'));
    _ref9 = singletonsByType.upgrade;
    _results = [];
    for (_m = 0, _len4 = _ref9.length; _m < _len4; _m++) {
      upgrade = _ref9[_m];
      count = parseInt((_ref10 = (_ref11 = this.singletons.upgrade) != null ? _ref11[upgrade] : void 0) != null ? _ref10 : 0);
      row = $.parseHTML($.trim("<div class=\"row\">\n    <div class=\"col\">\n        <label>\n            <input class=\"singleton-count\" type=\"number\" size=\"3\" value=\"" + count + "\" />\n            <span class=\"upgrade-name\">" + (exportObj.upgrades[upgrade].slot ? exportObj.translate('sloticon', exportObj.upgrades[upgrade].slot) : void 0) + " " + (exportObj.upgrades[upgrade].display_name ? exportObj.upgrades[upgrade].display_name : upgrade) + " \n            " + (exportObj.upgrades[upgrade].faction ? "(" + exportObj.upgrades[upgrade].faction + ")" : '') + "</span>\n        </label>\n    </div>\n</div>"));
      input = $($(row).find('input'));
      input.data('singletonType', 'upgrade');
      input.data('singletonName', upgrade);
      input.closest('div').css('background-color', this.countToBackgroundColor(input.val()));
      $(row).find('.upgrade-name').data('name', upgrade);
      _results.push(upgradecollection_content.append(row));
    }
    return _results;
  };

  Collection.prototype.destroyUI = function() {
    this.modal.modal('hide');
    this.modal.remove();
    return $(exportObj).trigger('xwing-collection:destroyed', this);
  };

  Collection.prototype.setupHandlers = function() {
    $(exportObj).trigger('xwing-collection:created', this);
    $(exportObj).on('xwing-backend:authenticationChanged', (function(_this) {
      return function(e, authenticated, backend) {
        if (!authenticated) {
          return _this.destroyUI();
        }
      };
    })(this)).on('xwing-collection:saved', (function(_this) {
      return function(e, collection) {
        _this.modal_status.text('Collection saved');
        return _this.modal_status.fadeIn(100, function() {
          return _this.modal_status.fadeOut(1000);
        });
      };
    })(this)).on('xwing:CollectionCheck', this.onCollectionCheckSet);
    $(this.modal.find('input.expansion-count').change((function(_this) {
      return function(e) {
        var target, val;
        target = $(e.target);
        val = target.val();
        if (val < 0 || isNaN(parseInt(val))) {
          target.val(0);
        }
        _this.expansions[target.data('expansion')] = parseInt(target.val());
        target.closest('div').css('background-color', _this.countToBackgroundColor(target.val()));
        return $(exportObj).trigger('xwing-collection:changed', _this);
      };
    })(this)));
    $(this.modal.find('input.singleton-count').change((function(_this) {
      return function(e) {
        var target, val, _base1, _name;
        target = $(e.target);
        val = target.val();
        if (isNaN(parseInt(val))) {
          target.val(0);
        }
        ((_base1 = _this.singletons)[_name = target.data('singletonType')] != null ? _base1[_name] : _base1[_name] = {})[target.data('singletonName')] = parseInt(target.val());
        target.closest('div').css('background-color', _this.countToBackgroundColor(target.val()));
        return $(exportObj).trigger('xwing-collection:changed', _this);
      };
    })(this)));
    return $(this.modal.find('.check-collection').change((function(_this) {
      return function(e) {
        var result;
        if (_this.modal.find('.check-collection').prop('checked') === false) {
          result = false;
          _this.modal_status.text("Collection Tracking Disabled");
        } else {
          result = true;
          _this.modal_status.text("Collection Tracking Active");
        }
        _this.checks.collectioncheck = result;
        _this.modal_status.fadeIn(100, function() {
          return _this.modal_status.fadeOut(1000);
        });
        return $(exportObj).trigger('xwing-collection:changed', _this);
      };
    })(this)));
  };

  Collection.prototype.countToBackgroundColor = function(count) {
    var i;
    count = parseInt(count);
    switch (false) {
      case !(count < 0):
        return 'red';
      case count !== 0:
        return '';
      case !(count > 0):
        i = parseInt(200 * Math.pow(0.9, count - 1));
        return "rgb(" + i + ", 255, " + i + ")";
      default:
        return '';
    }
  };

  return Collection;

})();

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

exportObj.rulesEntries = function() {
  return {
    version: {
      number: "1.4.2",
      date: "06/15/22"
    },
    glossary: {
      "ABILITIES": {
        name: "Abilities",
        text: "Some of the text on condition, damage, ship, and upgrade cards describe <strong>abilities</strong>. These abilities consist of a timing and an effect.<br> • Unless a card ability uses the word “may” or has the <strong>“Action:”</strong> or <strong>“Attack:”</strong> headers, the ability is mandatory and must be resolved. <br> • A ship cannot spend or remove tokens that belong to another ship unless an effect explicitly states otherwise. Similarly, a ship cannot spend, modify, or remove die results that belong to another ship unless an effect explicitly states otherwise.<br> • If multiple abilities resolve at the same time, the players use the ability queue to determine the order in which the abilities resolve. <br>• A destroyed ship’s abilities remain active until that ship is removed unless the ability specifies a different timing for the effect to end, such as “until the end of the Engagement Phase.” Such effects remain active until the end of the specified time.<br><br><h5>Pilot and Ship Abilities</h5>Some ship cards have abilities in addition to or instead of flavor text. All limited ships have unique, personalized pilot abilities instead of flavor text. Some ships have ship abilities on their ship cards listed below their pilot ability or flavor text. Ships of the same ship type all have the same ship ability.<br><br><h5>Replacement Effects</h5>Some abilities are substitutive in nature—they replace how an effect would normally resolve. These abilities use the words “would” and “instead.” <br>• Replacement effects are not added to the end of the ability queue as they are resolved at the timing of the effect they are replacing. <br>• When a replacement effect resolves, the replaced effect is treated as having not occurred. <br>◊ For example, Jyn Erso’s ability says “If a friendly ship at range 0–3 would gain a focus token, it may gain 1 evade token instead.” If this ability is used, an effect that triggers after a ship gains a focus token cannot trigger. <br>• If there are multiple replacement effects that could substitute for the same effect, only one effect can be substituted for the original effect. <br>◊ For example, a ship is about to gain a focus token and has both the ability “Before you would gain a focus token, gain an evade token instead” and the ability “Before you would gain a focus token, gain a calculate token instead.” Only one of those abilities could be resolved.<br><br><h5>Paying Costs</h5>A ship can pay a cost for an effect only if the effect can be resolved. <br>• For example, GNK “Gonk” Droid’s ability says “<strong>Action:</strong> Spend 1 %CHARGE% to recover 1 shield.” The ship cannot spend the charge if it has no inactive shields.<br> • Replacement effects can replace a cost that a ship would pay for an effect. If a cost is replaced in this way, the effect is still resolved."
      },
      "ABILITY QUEUE": {
        name: "Ability Queue",
        text: "The <strong>ability queue</strong> is used to resolve the timing of multiple abilities that trigger during the same timing window. Abilities are resolved from the front of the queue to the back of the queue. These abilities are added to the back of the ability queue using the following rules:<br>1. If both players have abilities that triggered from the same event, the abilities are added to the ability queue in player order.<br> 2. If a player has multiple abilities that triggered from the same event, that player chooses the order that those abilities are added to the ability queue. <br>3. If resolving an effect from the ability queue triggers additional effects, they are added to the front of the ability queue using the above rules. <br>See Appendix for 2 examples of the ability queue.<br> • If there are game effects that share the same timing window as a player’s ability, the game effect is resolved first.<br> ◊ For example, if a ship performs a red barrel roll and the ship has an ability that triggers after it performs a barrel roll, the ship gains a stress token before the other ability is resolved.<br> • If an ability’s requirements are not met, it cannot be added to the ability queue. For example, at the start of the Engagement Phase, if a ship has an ability that requires it to be tractored, but that ship is not tractored, that ability cannot be added to the queue. The ship cannot add the ability to the queue even if another ability also added to the queue at the start of the Engagement Phase would cause that ship to become tractored upon its resolution. <br>• If a ship would be removed while there are one or more abilities in the queue, do not remove that ship until there are no abilities in the queue."
      },
      "ACTIONS": {
        name: "Actions",
        text: "Ships can perform actions, which thematically represent things a pilot can do, such as repositioning slightly or flying defensively. When a ship is instructed to perform an action, the ship can perform a <strong>standard action</strong>, which includes actions listed in that ship’s action bar, as well as abilities that have the <strong>“Action:”</strong> header on that ship’s condition, damage, ship, or upgrade cards. <br><br>• A ship cannot perform actions while stressed. <br>• Some upgrade cards have an action bar that lists one or more actions. <br>These actions are added to the ship’s action bar and therefore are standard actions that the ship can perform. <br>• Some ship and upgrade cards have a linked action bar which allows the ship to perform linked actions. <br>• Some actions can fail. <br>• Actions have three difficulties: white, red, or purple. White is the least difficult, then red, then purple. <br>◊ As a cost to attempt to perform a red action, a ship must gain 1 stress token. <br>◊ As a cost to attempt to perform a purple action, a ship must spend 1 %FORCE%. <br>◊ If a ship is instructed to perform an action, the action is white unless stated otherwise. <br>◊ If two or more effects would alter the color of an action from its default color (e.g. “treat the action as red” ), the action is treated as the most restrictive of those colors. <br>• There is no maximum limit to the number of actions a ship can perform over the course of a round, but a ship cannot perform the same action more than once during a single round, or perform an action it has failed this round. <br>◊ If a ship has multiple damage cards with the same name, each damage card’s ability is a different action. <br>◊ Some cards have multiple <strong>“Action:”</strong> headers, each of which indicates a different action. <br>◊ Game effects such as “gain 1 focus token,” “boost,” or “acquire a lock” are not actions, and a ship can resolve these game effects any number of times each round. Game effects such as “perform a %FOCUS% action,” “perform a %BOOST% action,” or “perform a %LOCK% action” are actions, and therefore each ship can perform each of these actions only once per round. <br>• During the Perform Action step of a ship’s activation, the ship may perform an action. <br>• A ship can choose not to perform an action during the Perform Action step or when granted an action."
      },
      "ACTIVATION PHASE": {
        name: "Activation Phase",
        text: "The Activation Phase is the third phase of a round. During this phase, each ship <strong>activates</strong>, one at a time, starting with the ship with the lowest initiative and continuing in ascending order.<br><br>Each ship activates by resolving the following steps in order:<br><strong>1. Reveal Dial:</strong> The ship’s assigned dial is revealed by flipping it faceup and then placing it next to its ship card.<br><strong>2. Execute Maneuver:</strong> The ship executes the maneuver selected on the revealed dial.<br><strong>3. Perform Action:</strong> The ship may perform one action.<br><br>After all ships have activated, players proceed to the Engagement Phase.<br>• If a player has multiple ships with the same initiative value, that player activates them in any order—finishing the entire activation for one ship before activating another ship of the same initiative value.<br>• If multiple players have ships with the same initiative value, player order is used to determine the sequence. The first player activates all of their ships with that initiative value in any order, then the second player activates all of their ships with that initiative value in any order.<br>• When a ship activates, if it skips the Reveal Dial step, it cannot resolve any abilities that trigger after the ship reveals its dial.<br>• A stressed ship cannot execute red maneuvers or perform actions.<br>• If a stressed ship attempts to execute a red maneuver, the ship executes a stress maneuver instead. The stress maneuver is a white [%STRAIGHT% 2] maneuver. The bearing, difficulty, and speed of this maneuver cannot be changed unless an ability explicitly affects the stress maneuver.<br>• If a ship with no active %FORCE% attempts to perform a purple maneuver, it executes a stress maneuver instead."
      },
      "AGILITY": {
        name: "Agility",
        text: "A ship’s agility is the green number on its ship card. This value indicates the number of defense dice the ship rolls while it defends.<br>• During an attack, a ship with an agility value of “0” can still roll additional defense dice granted by game effects such as the range bonus, the attack being obstructed by an obstacle, or other card abilities.<br>• Abilities or game effects that cause a ship to roll additional or fewer defense dice do not modify the agility value of the defender.<br>• All modifiers to agility are cumulative.<br>• After all modifiers have been applied, if the number of defense dice required for a roll is less than “0,” it is treated as “0.”<br>• After all modifiers have applied, if the number of defense dice required for a roll is greater than \"6,\" it is treated as \"6."
      },
      "ALLIED": {
        name: "Allied",
        text: "Some ships/devices controlled by the same player are <strong>allied</strong> to each other instead of being friendly. Allied ships are use by their player much like friendly ships, but do not interact with effects that affect \"friendly ships.\" <br><br>• Ships cannot perform attacks against allied ships, unless specified otherwise.<br>• A ship is not friendly to its allied ships, and abilities that affect \"friendly ships\" do not affect allied ships. <br>• A ship is not \"allied\" with itself, and so abilities that affect \"allied ships\" do not affect the ship that produces them."
      },
      "ARC": {
        name: "Arc",
        text: "An arc is an area formed between the lines created by extending hash marks or arc lines printed on a ship token to range 3. A ship is <strong>in</strong> an arc if any part of its base is inside that area.<br>• Arcs are measured beyond the base of ships. The portion of any object that lies beneath a ship is not in any of those ship’s arcs.<br><br><h5>Standard Arcs</h5>There are three types of <strong>standard arcs</strong> created from the crossed diagonal arc lines:<br><strong>1. Front arc (%FRONTARC%):</strong> This arc projects in the same direction that the ship is facing. Most ships have a primary %FRONTARC% weapon. Almost all %CANNON%, %TORPEDO%, and %MISSILE% weapons use this arc.<br><strong>2. Side arcs (%LEFTARC%, %RIGHTARC%):</strong> These arcs are on the left (%LEFTARC%) or right (%RIGHTARC%) side of ships.<br><strong>3. Rear arc (%REARARC%):</strong> This arc projects in the opposite direction that the ship is facing. Some ships have a primary %REARARC% weapon.<br><br><h5>Bullseye Arc</h5>Inside of the front arc, each ship has a bullseye arc.<br><strong>Bullseye arc (%BULLSEYEARC%):</strong> This arc is found inside the %FRONTARC%. If something is in a ship’s %BULLSEYEARC%, it is also in its %FRONTARC%.<br>• The %BULLSEYEARC% is the width and length of the range ruler.<br>• There is no intrinsic effect when a ship attacks a ship in its %BULLSEYEARC%, but card abilities may refer to it.<br><br><h5>Full Arcs</h5>There are two <strong>full arcs</strong> that use the midway line instead of the printed arc lines.<br><strong>1. Full front arc (%FULLFRONTARC%):</strong> This arc covers all of the area in front of the ship.<br>Some ships have primary %FULLFRONTARC% weapons.<br><strong>2. Full rear arc (%FULLREARARC%):</strong> This arc covers all of the area behind the ship. <br>Using the %FULLFRONTARC%, %FULLREARARC%, and extending the midway line to range 3, the following phrases are used to express specific spacial relationships between ships. <br><strong>• Behind:</strong> If ship A is in the %FULLREARARC% of ship B and ship A does not cross the midway line of ship B, then ship A is <strong>behind</strong> ship B. <br><strong>• In front of:</strong> If ship A is in the %FULLFRONTARC% of ship B and ship A does not cross the midway line of ship B, then ship A is <strong>in front of</strong> ship B.<br><strong>• Flanking:</strong> If ship A crosses the midway line of ship B, then ship A is <strong>flanking</strong> ship B.<br><br><h5>Turret Arcs</h5><br>Unlike other arcs, some weapons use turret arc indicators to select arcs.<br>There are two types of turret arc indicators: single turret (%SINGLETURRETARC%) and double turret (%DOUBLETURRETARC%). During setup, a ship with a primary (or special) %SINGLETURRETARC% or %DOUBLETURRETARC% weapon adds the corresponding turret arc indicator to its base. <br>The turret arc indicator points toward one of the ship’s four standard arcs. <br>The standard arc that the turret arc indicator is pointing toward is a %SINGLETURRETARC% in addition to still being a standard arc. While a ship performs a %SINGLETURRETARC% attack, it can attack a target that is in its %SINGLETURRETARC% arc. <br>A ship with a double turret arc indicator has two %SINGLETURRETARC% in opposite directions. <br>A ship can adjust which standard arc(s) that its turret arc indicator is pointing towards by using the rotate (%ROTATEARC%) action. <br>Huge ships have additional rules for turret arc indicators (see Appendix: Huge Ships). <br><br><h5>Firing Arcs</h5> A ship’s <strong>firing arcs</strong> include all shaded arcs on the ship’s ship token plus all %SINGLETURRETARC% arcs, if any. <br>• If an upgrade card gives a ship a %SINGLETURRETARC% arc or primary weapon with a specified arc, those arcs are also firing arcs."
      },
      "ATTACK": {
        name: "Attack",
        text: "Ships can perform attacks which thematically represents the ship firing its blaster cannons, ordnance, or other weapons. <br>If a ship performs an attack, it becomes the attacker then follows these steps: <br><br><strong>1. Declare Target:</strong> During this step, the attacking player identifies and names the defender of the attack. <br>a. <strong>Measure Range:</strong> The attacking player measures range from the attacker to any number of enemy ships and determines which enemy ships are in which of its arcs. <br>b. <strong>Choose Weapon:</strong> The attacking player chooses one of the attacker’s primary or special weapons. <br>c. <strong>Declare Defender:</strong> The attacking player chooses an enemy ship to be the defender. The defender must meet the requirements defined by the weapon. <br>d. <strong>Pay Costs:</strong> The attacker must pay any costs for performing the attack. <br><br>• During the Declare Target step, the attack arc is the arc that corresponds to the chosen weapon. The attack range is determined by measuring range from the closest point of the attacker to the closest point of the defender that is in the attack arc. <br>• A primary weapon requires the attack range to be range 0-3. A primary weapon has no cost by default. <br>• Special weapons have different requirements specified by the source of the attack. <br>• Unless it has an ability that allows attacks at range 0, a ship cannot attack a ship at range 0, even if the attack range would be range 1. <br>• If there is no valid target for the chosen weapon, or if the attacker cannot pay the costs required for the attack, the attacking player either chooses a different weapon or chooses not to attack. <br><br><strong>2. Attack Dice:</strong> During this step, the attacking player rolls attack dice and the players can modify the dice. <br>a. <strong>Roll Attack Dice:</strong> The attacking player determines the number of attack dice to roll. Starting with the attack value, modifiers that increase or decrease the number of attack dice (such as range bonus and other effects) are applied. Next, if any minimum or maximum number of dice has been set, that limit is applied. There is always a minimum of 0 and a maximum of 6. Then they roll that many dice. <br>• While performing a primary attack at attack range 0, attack dice cannot be added, unless stated otherwise <br>b. <strong>Modify Attack Dice:</strong> The players resolve abilities that modify the attack dice. The defending player resolves their abilities first, then the attacking player resolves their abilities. <br><br>• While performing a primary attack at attack range 0,the attacker's dice can be modified only by spending %FORCE% for their default effect <br><br>•While performing a primary attack at attack range 0,the attacker's dice cannot be modified, except by the defender. <br><br>• The most common ways the attacker modifies attack dice are by spending a focus token or spending a lock it has on the defender. <br>• Each attack die cannot be rerolled more than once during an attack. <br><br><strong>3. Defense Dice:</strong> During this step, the defending player rolls a number of defense dice equal to the ship’s agility value and the players can modify the dice. <br>a. <strong>Roll Defense Dice:</strong> The defending player determines a number of defense dice to roll. Starting with the defender’s agility value, modifiers that increase or decrease the number of defense dice (such as range bonus, whether the attack is being obstructed by an obstacle, and other effects) are applied. Next, if any minimum or maximum number of dice has been set, that limit is applied. There is always a minimum of 0 and a maximum of 6. Then they roll that many dice. <br>b. <strong>Modify Defense Dice:</strong> The players resolve abilities that modify the defense dice. The attacking player resolves their abilities first, then the defending player resolves their abilities. <br><br>• While defending at range 0, enemy ships cannot cancel, modify, or remove dice or results <br><br>• The most common ways the defender modifies defense dice are by spending a focus or evade token. <br>• Each defense die cannot be rerolled more than once during an attack. <br><br><strong>4. Neutralize Results:</strong> During this step, pairs of attack and defense dice <strong>neutralize</strong> each other. Dice are neutralized in the following order: <br>a. Pairs of %EVADE% and %HIT% results are canceled. <br>b. Pairs of %EVADE% and %CRIT% results are canceled. <br>The attack hits if at least one %HIT% or %CRIT% result remains uncanceled; otherwise, the attack misses. <br><br><strong>5. Deal Damage:</strong> If the attack hits, the defender suffers damage for each uncanceled %HIT% and %CRIT% result in the following order: <br>a. The defender suffers 1 %HIT% damage for each uncanceled %HIT% result. Then cancel all %HIT% results. <br>b. The defender suffers 1 %CRIT% damage for each uncanceled %CRIT% result. Then cancel all %CRIT% results. <br><br><strong>6. Aftermath:</strong> Abilities that trigger after an attack are resolved in the following order. <br>a. Resolve any of the defending player’s abilities that trigger after a ship defends or is destroyed, excluding abilities that grant a bonus attack. <br>b. Resolve any of the attacking player’s abilities that trigger after a ship performs an attack or is destroyed, excluding abilities that grant a bonus attack. <br>c. Resolve any of the defending player’s abilities that trigger after a ship defends or is destroyed that grant a bonus attack. <br>d. Resolve any of the attacking player’s abilities that trigger after a ship performs an attack or is destroyed that grant a bonus attack. <br><br>• Each ship may perform one standard attack when it engages during the Engagement Phase. <br>• If a ship is destroyed at an initiative step during the Engagement Phase, the ship is not removed until all ships of the attacker’s initiative have engaged. <br>• During an attack, a ship cannot choose to roll fewer dice than it is supposed to roll. <br>• If a player would roll more dice than they have available, keep track of the rolled results and reroll the dice necessary to equal the total number of dice the player would have rolled all at once. Note that these dice are not considered rerolled for the purposes of modifying dice."
      },
      "ATTACK ARC": {
        name: "Attack Arc",
        text: "During an attack, the <strong>attack arc</strong> is the arc that corresponds to the weapon the attacker is using. During the Declare Defender step, the opposing ship needs to be in the attack arc."
      },
      "ATTACK RANGE": {
        name: "Attack Range",
        text: "During an attack, the <strong>attack range</strong> is determined by measuring range from the closest point of the attacker to the closest point of the defender that is in the attack arc.<br>• While measuring range for abilities that do not specify the attack range, the range between the attacker and defender is measured from the closest point of the attacker to the closest point of the defender, ignoring the attack arc.<br><br>• While attacking a ship at range 0, the attack range is always 0."
      },
      "BANK": {
        name: "Bank",
        text: "See Bearing."
      },
      "BARREL ROLL": {
        name: "Barrel Roll",
        text: "Pilots can barrel roll to move their ship laterally and adjust their position. When a small ship performs a %BARRELROLL% action, it barrel rolls by following these steps:<br>1. Take the [1 %STRAIGHT%] template.<br>2. Place the narrow edge of the template flush against the left or right side of the ship’s base. The template must be placed with the middle line of the template aligned with the hashmark on the side of the base. <br>3. Lift the ship off the play surface, then place the ship with the hashmark on the side of the base aligned to the front, middle, or back of the other narrow end of the template. <br>4. Return the template to the supply. <br><br>When a medium or large ship barrel rolls, substitute “long edge” for “narrow edge” in the above description. <br><br>• When a player declares to barrel roll a ship, that player also declares whether the ship is barrel rolling to the left or right. Then, while attempting to place the ship, the player may attempt to place the ship at the front, middle, and back before choosing one of those positions. <br>• While attempting to place a ship to complete a barrel roll, the barrel roll can fail if any of the following occurs: <br>◊ All three positions would cause the ship to overlap another ship. <br>◊ All three positions would cause the ship to overlap or move through an obstacle. <br>◊ All three positions would cause the ship to be outside the play area (and therefore would cause that ship to flee). <br>• If a barrel roll fails, the ship is returned to its prior position before it attempted the barrel roll. If this was part of a %BARRELROLL% action, that action fails. <br>• The player cannot choose to fail a barrel roll if one of the three positions would not cause the action to fail. <br>• Performing a barrel roll does not count as executing a maneuver but does count as a move. <br>• If an ability instructs a ship to barrel roll, this is different than performing a %BARRELROLL% action. A ship that barrel rolls without performing the action can still perform the %BARRELROLL% action this round."
      },
      "BEARING": {
        name: "Bearing",
        text: "Each maneuver has three components: speed (a number 0–5), difficulty (red, white, or blue), and bearing (an arrow or other symbol). Each bearing is also defined with a <strong>direction</strong>, including straight, left, or right. <br>All maneuvers are categorized as either basic or advanced. Additionally, all maneuvers that begin by using the front guides are <strong>forward</strong> maneuvers.<br><br><h5>Basic Maneuvers</h5>The following bearings are for basic maneuvers. These maneuvers follow the standard rules for executing a maneuver. <br><strong>• Straight:</strong> The %STRAIGHT% (straight) bearing advances a ship straight forward. <br><strong>• Bank:</strong> The %BANKLEFT% (left bank) and %BANKRIGHT% (right bank) bearings advance a ship at a shallow curve to one side, changing its facing by 45º. <br><strong>• Turn:</strong> The %TURNLEFT% (left turn) and %TURNRIGHT% (right turn) bearings advance a ship at a tight curve to one side, changing its facing by 90º. <br><br><h5>Advanced Maneuvers</h5> The following bearings are for <strong>advanced maneuvers</strong>. These have exceptions to the standard rules for executing a maneuver. <br><strong>• Koiogran Turn:</strong> The %UTURN% (Koiogran turn) bearing advances a ship straight forward, changing its facing by 180º. This uses the same template as the %STRAIGHT% maneuver. <br>◊ If the ship fully executes the maneuver, the player slides the ship’s front guides into the end of the template instead of the rear guides. <br><strong>• Segnor’s Loop:</strong> The %SLOOPLEFT% (left Segnor’s Loop) and %SLOOPRIGHT% (right Segnor’s Loop) bearings advance a ship at a shallow curve to one side, then reverses its facing. This uses the same template as the %BANKLEFT% and %BANKRIGHT% maneuvers. <br>◊ If the ship fully executes the maneuver, the player slides the ship’s front guides into the end of the template instead of the rear guides. <br><strong>• Tallon Roll:</strong> The %TROLLLEFT% (left Tallon Roll) and %TROLLRIGHT% (right Tallon Roll) bearings advance a ship at a tight curve to one side, sharply changing its facing by 180º. This uses the same template as the %TROLLLEFT% and %TROLLRIGHT% maneuvers. <br>◊ If the ship fully executes the maneuver, before the player places the ship at the opposite end of the template, the ship is rotated 90º to the left for a %TURNLEFT%, or 90º to the right for a %TURNRIGHT%. Then the player places the ship with the hashmark on the side of the base aligned to the left, middle, or right of the end of the template, (similar to a barrel roll). <br><br>If a ship overlaps another ship while executing a Koiogran turn, Segnor’s Loop, or Tallon Roll, the ship partially executes the maneuver by using the rear guides as though it was executing the basic maneuver that uses the same template. <br><br><strong>• Stationary:</strong> The %STOP% (stationary) bearing does not move the ship from its current position. This bearing does not have a corresponding template. <br>◊ A ship that executes this maneuver counts as executing a maneuver, does not overlap any ships, does trigger the effects of overlapping any obstacles at range 0, and continues to be at range 0 of any objects it was touching before executing this maneuver. <br>◊ Stationary maneuvers are not forward maneuvers. <br>◊ A ship that executes a stationary maneuver always fully executes the maneuver. <br><br>At the start of any type of <strong>reverse</strong> maneuver, instead of sliding the template between the front guides of the ship’s base, slide it between the rear guides. Additionally, when the ship is moved, the player slides the ship’s front guides into the end of the template instead of the rear guides. <br><br><strong>• Reverse Straight:</strong> The %REVERSESTRAIGHT% (reverse straight) bearing moves the ship straight backward. This bearing uses the same template as the %STRAIGHT% maneuver. <br>◊ Reverse straight maneuvers are reverse maneuvers, not forward maneuvers. <br><strong>• Reverse Bank:</strong> The %REVERSEBANKLEFT% ( left reverse bank) and %REVERSEBANKRIGHT% (right reverse bank) bearing moves the ship at a shallow curve to one side, changing its facing by 45º. This bearing uses the same template as the %BANKLEFT% and %BANKRIGHT% maneuvers. <br>◊ Reverse bank maneuvers are reverse maneuvers, not forward maneuvers. "
      },
      "BEHIND": {
        name: "Behind",
        text: "See Arc."
      },
      "BLAZE": {
        name: "Blaze",
        text: "When this object is placed, fit the guides to the tab of the Blazer Bomb. <br><br>After this obstacle is placed, place a fuse marker on it. <br><br>• During the End Phase, remove each Blaze with no fuse markers, then remove one fuse marker from each Blaze. <br><br>While a ship moves, if it moves through or overlaps a Blaze obstacle, it suffers the following effect: <br><br>• After the move is resolved, roll one attack die. On a %HIT% or %CRIT% result, the ship suffers one 󲁧 damage; on a %FOCUS% result, it gains one stress token. Then the ship skips its Perform Action step this round. <br><br>After a remote relocates, if it relocates so that it at range 0 of a Blaze obstacle, it suffers one %HIT% damage. <br><br>While a unit defends, if the attack is obstructed by a Blaze, it rolls 1 additional defense die."
      },
      "BONUS ATTACK": {
        name: "Bonus Attack",
        text: "If a card instructs a ship to perform a bonus attack, it performs an additional attack during the Aftermath step. <br>• A few special weapons provide a bonus attack using the same weapon. While performing this type of bonus attack, the same arc requirements, range requirements, and cost requirements are followed unless stated otherwise. <br>◊ For example, a ship that attacked with the Cluster Missiles card can perform a bonus attack against another ship at range 1 of the defender and ignore the %LOCK% requirement. The range (1–2), arc (%FRONTARC%), and cost (spending 1 %CHARGE% charge) are maintained for the bonus attack. <br>• A ship can perform only one bonus attack per round. <br>• If both players have a bonus attack that triggers after an attack, the defending player resolves their bonus attack first. <br>• Huge ships have additional rules for bonus attacks. See Appendix: Huge Ships. "
      },
      "BOMB": {
        name: "Bomb",
        text: "A bomb is a type of device that is placed in the play area through a card effect from a %DEVICE% upgrade card. The upgrade card that corresponds to the bomb has the “Bomb” trait at the top of its card text. Bombs can be dropped or launched during the System Phase and detonate at the end of the Activation Phase. "
      },
      "BOOST": {
        name: "Boost",
        text: "Boost represents a pilot activating additional thrusters to move fartherforward. When a ship performs a %BOOST% action, it boosts by following these steps: <br>1. Choose the [1 %BANKLEFT%], [1 %STRAIGHT%], or [1 %BANKRIGHT%] template. <br>2. Set the template between the ship’s front guides. <br>3. Place the ship at the opposite end of the template and slide the rear guides of the ship into the template. <br>4. Return the template to the supply. <br><br>• When a player declares to boost a ship, that player also declares whether the ship is boosting straight, left, or right. <br>• While attempting to place a ship to complete a boost, the boost can fail if any of the following occurs: <br>◊ The ship’s final positions would cause the ship to overlap another ship. <br>◊ The ship would overlap or move through an obstacle. <br>◊ The ship’s final position would cause it to be outside the play area (and therefore would cause that ship to flee). <br><br>• If a boost fails, the ship is returned to its prior position before it attempted the boost. If this was part of a %BOOST% action, that action fails. <br>• The player cannot choose to fail a boost if the final position would not cause the action to fail. <br>• Performing a boost does not count as executing a maneuver but does count as a move. <br>• If an ability instructs a ship to boost, this is different than performing a %BOOST% action. A ship that boosts without performing the action can still perform the %BOOST% action this round. "
      },
      "BREAK": {
        name: "Break",
        text: "See Lock."
      },
      "BUILDER KEYWORDS": {
        name: "Builder Keywords",
        text: "See Squad Building."
      },
      "BULLSEYE ARC": {
        name: "Bullseye Arc",
        text: "See Arc."
      },
      "CALCULATE": {
        name: "Calculate",
        text: "Pilots can calculate, using advanced computing power to increase their combat performance. When a ship performs the %CALCULATE% action, it gains one calculate token. <br>A ship is <strong>calculating</strong> while it has at least one calculate token. Calculate tokens are circular, green tokens. A calculating ship follows these rules: <br>• While a calculating ship performs an attack, during the Modify Attack Dice step, it may spend one or more calculate tokens to change that many of its %FOCUS% results to %HIT% results. <br>• While a calculating ships defends, during the Modify Defense Dice step, it may spend one or more calculate tokens to change that many of its %FOCUS% results to %EVADE% results. <br><br>Additionally: <br>• A ship cannot spend calculate tokens to change %FOCUS% results to %HIT% or %EVADE% results if it does not have any %FOCUS% results. <br>• If a card ability instructs a ship to gain a calculate token, this is different than performing a %CALCULATE% action. A ship that gains the token without performing the action can still perform the %CALCULATE% action this round."
      },
      "CANCEL": {
        name: "Cancel",
        text: "When a die result is canceled, a player takes one die displaying the canceled result and physically removes the die from the common area. Players ignore all canceled results. <br>• Canceling dice does not count as modifying dice."
      },
      "CHARGES": {
        name: "Charges",
        text: "<strong>Charges</strong> are two-side punchboard components that track certain limited resources. Some ship and upgrade cards have charges to denote their use. <br><br>All charges obey the following rules: <br>• When an effect instructs a ship to <strong>recover</strong> a charge, an inactive charge on that ship (ship or upgrade card) is flipped to its active side. A card cannot recover a charge if all of its charges are on their active side. <br>• When an effect instructs a ship to <strong>lose</strong> a charge, a charge assigned to the relevant card is flipped to the inactive side. <br>• When a ship <strong>spends</strong> a charge, that charge is lost. A ship cannot spend a charge for an effect if all of its charges that are available for that effect are already inactive. <br>• Each card with a <strong>charge limit</strong> (the number) starts the game with a number of charges equal to the charge limit. Each charge starts on its active side. <br>• Charges associated with charge limits that have the recurring charge symbol are called <strong>recurring charges</strong>. Alternatively, charges associated with charge limits that do not have the recurring charge symbol are called <strong>non-recurring charges</strong>.  Charges that are instead lost over time are called <strong>negative recurring charges</strong>. <br><br><h5>Charge Types</h5>There are four types of charges: <br>• Standard charges (%CHARGE%), which represent limited resources like munitions and a pilot's stamina. These have a golden number. <br>• Force charges (%FORCE%), which represent the ebbing and flowing power of the Force: These have a purple number. <br>• Shields (%SHIELD%), which represent a ship's defensive shielding. These have a blue number. <br>• Energy (%ENERGY%), which represents a huge ship's draw of power from its engines (see Appendix: Huge Ships). These have a magenta number.<br><br> <h5>Recurring Charges</h5> Some charge limits, shield capacities, and all Force capacities have a recurring charge symbol. During the End Phase, each card with a recurring charge symbol recovers one charge per recurring charge symbol.<br><br> <h5>Negative Recurring Charges</h5> Some charge limits have a negative recurring charge symbol. During the End Phase, each card with a negative recurring charge symbol loses one charge per negative recurring charge symbol.<br><br> <h5>Standard Charge (%CHARGE%)</h5> Standard charges (%CHARGE%) can represent anything from limited munitions to exhaustible abilities that can only be performed infrequently. <br>• Ship charges are charges on ship cards and upgrade charges are charges on upgrade cards. <br>• If an upgrade card has a charge limit, the %CHARGE% are placed above that upgrade card (not the ship card it is attached to). <br>◊ If an upgrade card instructs the ship to spend %CHARGE%, those %CHARGE% are spent from that upgrade card. <h5>Force Charge (%FORCE%)</h5> Force charges (%FORCE%) represent how some pilots or crew members can exert their influence over the Force. <br>While it performs an attack, a ship can spend any number of %FORCE% during the Attack Dice step to change that number of its %FOCUS% results to %HIT% results. While it defends, a ship can spend any number of %FORCE% during the Defense Dice step to change that number of its %FOCUS% results to %EVADE% results. <br>• If an upgrade card has a Force capacity, this increases the Force capacity of the ship. The %FORCE% are placed above the ship card it is attached to (not the upgrade card). <br>◊ A ship card that does not have a Force capacity on its ship card has a Force capacity of “0,” but that capacity can be increased by upgrade cards that have a Force capacity. <br>◊ If a ship has multiple sources of recurring %FORCE%, the recurring values do not stack. During the End Phase, each ship with a Force capacity recovers a number of %FORCE% equal the highest number of recurring %FORCE% symbols among the cards that grant it a Force capacity. For example, if a ship with a Force capacity of \"0\" has two %CREW% cards that each grant it a Force capacity of \"+1\" and have one recurring %FORCE% symbol each, that ship has a Force capacity of \"2,\" but recovers only one %FORCE% during the End Phase. <br>◊ If an upgrade card instructs the ship to spend %FORCE%, those %FORCE% are spent from the ship card. <br><br><h5>Shield (%SHIELD%)</h5> Shields (%SHIELD%) represent defensive energy barriers. A ship is shielded while it has at least one active shield. <br>While a ship defends, shields provide it protection against damage. See Damage. Additionally: <br>• If an upgrade card has a shield capacity, this increases the shield capacity of the ship. The %SHIELD% are placed above the ship card it is attached to (not the upgrade card). <br>◊ A ship card that does not have a shield capacity on its ship card has a shield capacity of “0,” but that capacity can be increased by upgrade cards that have a shield capacity. <br>◊ During the End Phase, each ship with a shield capacity recovers a number of %SHIELD% equal the number of recurring %SHIELD% symbols on its ship card (only huge ships have recurring %SHIELD% symbols, see Appendix: Huge Ships). <br>◊ If an upgrade card instructs the ship to spend %SHIELD%, those %SHIELD% are spent from the ship card. <br><br><h5>Energy (%ENERGY%)</h5> Energy (%ENERGY%) are special charges used only by huge ships (see Appendix: Huge Ships)."
      },
      "CLOAK": {
        name: "Cloak",
        text: "Ships can cloak to become difficult to hit, and they can decloak to move unpredictably. When a ship performs the %CLOAK% action, it gains one cloak token. <br>A ship is cloaked while it has a cloak token. Cloak tokens are blue tokens. <br><br>A cloaked ship has the following effects: <br>• Its agility value is increased by 2. <br>• It is disarmed. <br>• It cannot perform the cloak action or gain a second cloak token. <br><br>During the System Phase, each cloaked ship may spend its cloak token to decloak. When a small ship decloaks, it must choose one of the following effects: <br>1. Barrel roll using the [2 %STRAIGHT%] template. <br>2. Boost using the [2 %STRAIGHT%] template. <br><br>When a medium or large ship decloaks, it must choose one of the following effects: <br>1. Barrel roll using the [1 %STRAIGHT%] template. <br>2. Boost using the [1 %STRAIGHT%] template. <br><br>• Decloaking does not count as executing a maneuver or performing an action but does count as a move. <br>• A ship can decloak even while stressed. <br>• When a player declares to decloak a ship, that player must declare which type of boost or barrel roll it is going to perform before placing a template on the play area. <br>• If a decloak fails, the ship is returned to its prior position before it attempted the decloak and the cloak token is not removed. <br>• Each ship cannot drop or launch a device during the same phase that it decloaked."
      },
      "CONDITION CARDS": {
        name: "Condition Cards",
        text: "Condition cards are cards assigned by ship and upgrade cards that represent persistent game effects. A condition card is not in play until a game effect assigns it to a ship. When a condition card is assigned, its text resolves. <br><br>After a ship is assigned a condition card, assign the associated condition marker to that ship as a reminder of the card’s persistent effect. <br>• A condition marker is removed when the corresponding condition card is removed. <br>• A condition that has been removed can be assigned again. <br>• When a ship is removed from the game, any condition cards assigned to that ship are not removed. <br><br><h5>Limited Conditions</h5> Some condition cards are limited, meaning that each player can have a limited number of instances of that condition in play. If an effect assigns a new instance of a limited condition in excess of the limited value of that condition for that player, the player whose effect caused the condition to be assigned chooses one instance of the limited condition in play and removes it, then assigns the new instance of that condition. <br><br> For example, if a condition is limited 1 and a second instance would be assigned for that player, the first instance of the condition card is removed and then the second is assigned. <br><br><h5>Secret Conditions</h5> Condition cards that share the same condition marker and are assigned facedown, rather than faceup, are called secret conditions. A secret condition is assigned by one player, and the other players do not know which of the secret conditions that shares the same marker was assigned. They are revealed when their effects are resolved. Additionally: <br>• No ship can have more than one secret condition that shares the same condition marker. <br>• If a ship is assigned a secret condition that uses the same condition marker as a condition it already has, the previous condition is removed (if it was facedown, do not reveal it). <br>• The player whose effect assigned the condition may look at the facedown condition at any time. <br>• The identity of the assigned secret condition, as well as any unassigned secret conditions that share the same condition marker, are hidden information from all other players. <br>• The text of secret conditions is open information that can be accessed by either player at any time. Products that include secret conditions include an extra copy of each of the secret conditions, so that all players can reference the text of the conditions without revealing which condition is in play."
      },
      "COORDINATE": {
        name: "Coordinate",
        text: "Pilots can coordinate to assist their allies. When a ship performs the %COORDINATE% action, it coordinates. A <strong>coordinating</strong> ship is a ship that is attempting to coordinate by performing the following steps: <br>1. Measure range from the coordinating ship to any friendly ships. <br>2. Choose another friendly ship at range 1–2. <br>3. The chosen ship may perform one action. <br><br>Additionally: <br>• While a ship coordinates, the coordinate fails if no valid ship is chosen. <br>◊ If the chosen ship attempts to perform an action but that action fails, the coordinate does not fail. <br>• If an ability instructs a ship to coordinate, this is different than performing a %COORDINATE% action. <br>◊ A ship that coordinates without performing the action can still perform the %COORDINATE% action this round. <br>◊ A ship that coordinates without performing the action may choose a friendly, allied, or enemy ship. If it chooses a ship controlled by a different player, the coordinated ship's controlling player chooses the action the ship performs."
      },
      "DAMAGE": {
        name: "Damage",
        text: "Damage represents the amount of structural damage a ship can take. Damage is tracked by damage cards. A ship is destroyed when the number of damage cards it has is equal to or greater than its hull value. <br><br>There are two types of damage: %HIT% (regular) damage and %CRIT% (critical) damage. When a ship suffers damage, that damage is suffered one at a time. For each damage a ship suffers, it loses an %SHIELD% (active shield). If it does not have an %SHIELD% remaining, it is dealt a damage card instead. For %HIT% damage, the card is dealt <strong>facedown</strong>; for %CRIT% damage, the card is dealt <strong>faceup</strong> and its text is resolved. All %HIT% damage is suffered <strong>before</strong> %CRIT% damage. <br><br>A ship is <strong>damaged</strong> while it has at least one damage card. A ship is <strong>critically damaged</strong> while it has at least one faceup damage card. <br>• If an effect instructs a player to deal a damage card to a ship, this is different from the ship suffering damage. The card is dealt to the ship regardless of whether the ship has any %SHIELD% (active shields). <br>• When a ship suffers damage or otherwise is dealt damage cards that would cause it to exceed its hull value, the excess damage cards are still dealt."
      },
      "DAMAGE CARDS": {
        name: "Damage Cards",
        text: "Damage cards are used to track how much damage a ship has suffered. When a ship needs to be dealt damage cards, the player uses their own damage deck. After a ship is destroyed, its damage cards remain on that ship. <br><br>Some abilities can cause damage cards to be flipped. A facedown damage card can be <strong>exposed</strong>, which flips it faceup and the effect is resolved. Both facedown and faceup damage cards can be <strong>repaired</strong>. If a faceup damage card is repaired, it is flipped facedown. If a facedown damage card is repaired, it is discarded. <br>• Exposing a damage card does not count as dealing a damage card and therefore does not trigger abilities related to suffering damage. <br>• If an ability exposes or repairs a ship’s facedown damage card, and the ship has multiple facedown damage cards, the card is chosen randomly from the facedown damage cards the ship has. <br>◊ To randomly select a facedown damage card, one player shuffles those cards and the other player chooses one. <br>• If an ability allows a ship to repair a damage card without specifying faceup or facedown, the player can choose to repair either type. <br>• A ship’s hull value is not reduced by being dealt damage cards. <br>• The text of a ship’s facedown damage cards cannot be looked at unless an effect specifies to do so. <br>• If a damage deck is empty when a damage card must be dealt or drawn, remove all damage cards from destroyed ships, flip them facedown, and shuffle them to create a new damage deck. <br> ◊ If there are still not enough damage cards in a damage deck, record how many facedown damage cards each ship has with scratch-paper or markers, then shuffle those facedown damage cards to create a new deck. <br>• Each damage card is numbered 1–14 on the bottom of the card. Near that number, there is a number of pips that indicate the number of copies of that damage card that are in the deck. This is useful to identify whether cards are missing and if so, how many and which cards. <br>• Huge ships have their own damage cards. See Appendix: Huge Ships."
      },
      "DECLOAK": {
        name: "Decloak",
        text: "See Cloak."
      },
      "DEFEND": {
        name: "Defend",
        text: "See Attack."
      },
      "DEFENDER": {
        name: "Defender",
        text: "The ship that is chosen during the Declare Defender step of the Declare Target step of an attack is the defender. <br>• That ship remains the defender until after all “after attacking” and “after defending” abilities have resolved during the Aftermath step."
      },
      "DEPLETE": {
        name: "Deplete",
        text: "A ship is depleted while it has at least one deplete token. While a depleted ship performs an attack, it rolls one fewer attack die. Deplete tokens are red tokens. <br>• After a depleted ship applies the effect to roll one fewer attack die this way, it removes one deplete token. <br>• After a depleted ship executes a blue maneuver, it removes one deplete token."
      },
      "DEPLOY": {
        name: "Deploy",
        text: "See Dock."
      },
      "DEFICIT": {
        name: "Deficit",
        text: "If the squad point total of a player’s squad is less than the maximum allowed squad value, subtract the total squad point value of their squad from the maximum to determine that player’s deficit before the game begins.<br><br>• At the start of the game, each player earns mission points equal to their opponent’s deficit."
      },
      "DESTROYING SHIPS": {
        name: "Destroying Ships",
        text: "A ship is <strong>destroyed</strong> after it has a number of damage cards that equals or exceeds its hull value. A destroyed ship is placed on its ship card. <br>• After a ship is destroyed in a phase other than the Engagement Phase, it is removed from the game. <br>• If a ship is destroyed during the Engagement Phase, it is removed after all ships that have the same initiative as the currently engaged ship have engaged, which is called simultaneous fire <br>• If an effect triggers after a ship is destroyed, the effect resolves immediately, before the ship is removed. <br>• A destroyed ship’s abilities remain active until that ship is removed unless the ability specifies a different timing for the effect to end, such as “until the end of the Engagement Phase.” Such effects remain active until the end of the specified time."
      },
      "DEVICE": {
        name: "Device",
        text: "Devices are objects that exist in the play area and are represented by cardboard markers. Certain cards allow a ship to add a specific type of device to the play area and provide additional rules for how that device behaves. There are a number of ways for a device to enter or change location in the play area. Some provide specific instructions for how to place a device in the play area, while others use one or more of the following processes: <br><br>To <strong>drop</strong> a device, follow the steps below: <br>1. Take the template indicated on the upgrade card. <br>2. Set the template between the ship’s rear guides. <br>3. Place the device indicated on the upgrade card into the play area and slide the guides of the device into the opposite end of the template. Then remove the template. <br><br>To <strong>launch</strong> a device, follow the steps below: <br>1. Take the template indicated on the upgrade card. <br>2. Set the template between the ship’s front guides. <br>3. Place the device indicated on the upgrade card into the play area and slide the guides of the device into the opposite end of the template. Then remove the template. <br><br>To <strong>relocate</strong> a device, do the following: <br>• Pick up and replace the device as described in the effect that relocated it. This can involve a template, or might place the device at a ship’s guides. <br>• A device that relocates does not count as moving through or overlapping obstacles. <br><br>Some devices can detonate. When a device <strong>detonates</strong>, a number of effects trigger depending on the type of device. After resolving these effects, remove that device. <br>• See Appendix for examples of dropping and launching. <br>• One side of each device has a white boarder to help distinguish which player it belongs to. <br>• Most devices are placed during the System Phase. Each ship can place a device only once per System Phase. <br>• Most devices have an associated upgrade card that lets the player spend %CHARGE% to place that device. Many of these cards are payload (%DEVICE%) upgrades. <br>• When an effect instructs a ship to place a device associated with a different card (e.g. “drop 1 bomb”), that ship must pay all costs (such as spending %CHARGE%) and place the device as its associated card dictates. Other effects can modify how it is placed (e.g. the TIE Bomber’s Nimble Bomber ship ability) as normal. <br>• Each ship cannot place a device and decloak in the same phase. <br>• Devices are not obstacles, unless otherwise stated, but are objects.. <br>• If a device is placed overlapping a ship, it is placed under the ship’s base. <br>• If a device that detonates when overlapped is placed under more than one ship’s base, it detonates instantly and the player placing the device chooses which ship it affects. <br>• The guides on a device count as part of the device for the purposes of measuring range to or from it as well as overlapping and moving through it. <br>• A device cannot be placed so that a portion of the device would be outside the play area. If this would happen, play is reversed to before the device was placed—the device is not placed, any charges spent and other costs paid are recovered, and the player can choose to not place that device. <br>• If a ship partially executes a maneuver, only the portion of the template that is between the starting and final position of the ship is counted for the purpose of moving through or overlapping a device. Ignore the portion of the template that the ship moved backward along when resolving the maneuver."
      },
      "DIAL": {
        name: "Dial",
        text: "Each ship type has its own unique dial. All expansion products contain a dial for eachship in that product. Dials are used during the Planning Phase to secretly select maneuvers. <br>• When a player is instructed to set a ship’s dial, the player can choose the same maneuver that it already hasselected unless stated otherwise. <br>• Players are not allowed to touch or look at their opponents’ facedown dials. If a player wishes to touch or look at their own facedown dial, they must inform their opponent they wish to do so before touching the dial. <br>• Each faction has its own Maneuver Dial Upgrade Kit. These dials assemble slightly differently than the standard dials and use a curved indicator below the maneuver instead to indicate selected maneuvers."
      },
      "DICE MODIFICATION": {
        name: "Dice Modification",
        text: "Players can modify dice by spending various tokens and by resolving abilities. Dice can be modified in the following ways:<br>• <strong>Add:</strong> To add a die result, place an unused die displaying the result next to the rolled dice. A die added in this way is treated as a normal die for all purposes and can be modified and canceled. <br>• <strong>Change:</strong> To change a die result, rotate the die so that its faceup side displays the new result. <br>• <strong>Reroll:</strong> To reroll a die result, pick up the die and roll it again. <br>• <strong>Spend:</strong> To spend a result, remove the die from the dice pool. <br><br>Additionally: <br>• Dice modification occurs during the respective Modify Attack Dice or Modify Defense Dice step, unless otherwise stated. <br>• Although dice can be modified by multiple effects, each die cannot be rerolled more than once. <br>• If an ability instructs a ship to spend a result, it cannot spend another ship’s results unless stated otherwise. <br>• Canceling dice is not a dice modification. <br>• Rolling additional dice or fewer dice is not a dice modification. <br>• If a die cannot be changed to a given result, nothing happens. <br>◊ For example, an attack die cannot be changed to an 󲁄 result because that result does not appear on that die."
      },
      "DIFFICULTY": {
        name: "Difficulty",
        text: "Each maneuver has three components: speed (a number 0–5), difficulty (red, white, blue, or purple), and bearing (an arrow or other symbol). <br><br>During the Check Difficulty step of executing a maneuver, if the maneuver is red, the ship gains one stress token; if the maneuver is blue, the ship removes one stress token. If it is purple, the ship must spend 1 %FORCE% as a cost to execute the maneuver. <br>• A stressed ship cannot execute red maneuvers or perform actions. <br>• If an effect increases the difficulty of a maneuver, blue increases to white, and white increases to red. If an effect decreases the difficulty of a maneuver, red decreases to white, and white decreases to blue. <br>◊ An ability that increases the difficulty of a red maneuver or decreases the difficulty of a blue maneuver can resolve, but has no additional effect. <br>◊ If multiple abilities change the difficulty of a maneuver, the effects are cumulative. For example, if a ship reveals a red [4 %STRAIGHT%] maneuver and has one effect that increases the difficulty of the maneuver and another effect that decreases the difficulty of the maneuver, the maneuver is treated as red.<br>◊ A purple maneuver can never have its difficulty increased or decreased, and a non-purple maneuver's difficulty can never be increased to purple. Another maneuver can be treated as purple by an ability, or a purple maneuver can be treated as another color. For abilities that compare difficulty, purple maneuvers are considered more difficult than nonpurple maneuvers and the same difficulty as other purple maneuvers."
      },
      "DIRECTION": {
        name: "Direction",
        text: "See “Bearing”"
      },
      "DISARMED": {
        name: "Disarmed",
        text: "A ship is <strong>disarmed</strong> if it has at least one disarm token. A disarmed ship cannot perform attacks. The disarm token is a circular, orange token and is removed during the End Phase. <br>• During the Engagement Phase, disarmed ships still engage (although they cannot perform attacks)."
      },
      "DOCK": {
        name: "Dock",
        text: "Some abilities allow a ship to be attached to or ride inside another friendly ship. If a card ability instructs a ship to <strong>dock</strong> with a carrier ship, the docked ship is placed in reserve. A docked ship is able to <strong>deploy</strong> from its carrier ship during the System Phase by performing the following steps: <br>1. Choose a non-stationary, non-reverse maneuver on the docked ship’s dial. <br>2. Using the corresponding template, the docked ship executes the maneuver using the front guides or the rear guides of the carrier ship as if those guides were the docked ship’s starting position. <br>3. The ship may perform one action. <br>• While a ship is deploying, if the ship would partially execute the maneuver and cannot be placed without overlapping another ship, the ship fails to deploy and stays in reserve. <br>• A ship that deploys during the System Phase does not activate during the Activation Phase. <br><br>During the System Phase, a ship at range 0 of its carrier ship can dock with it and be placed in reserve. A ship cannot both dock and deploy during the same System Phase. A ship that docks during the System Phase does not resolve its assigned dial or activate during the Activation Phase. <br><br>• After a ship that can dock partially executes a maneuver and overlaps a friendly carrier ship, it may be placed in reserve. If it is, do not resolve the effects of the overlap.<br><br>If a carrier ship is destroyed, before the carrier is removed from the play area, any docked ships can <strong>emergency deploy</strong> from their carrier. A docked ship performs an emergency deploy similar to deploying, as described above, except the ship first suffers 1 %CRIT% damage and after executing the maneuver, does not have the opportunity to perform an action. <br>• If the docked ship attempts to emergency deploy and must partially execute the maneuver but cannot be placed without overlapping another ship, the ship fails to deploy and is destroyed. <br>• If a ship emergency deploys during the Engagement Phase, it can still engage during that phase at its initiative. If its initiative has already occurred this round, it cannot engage this phase. <br><br>Additionally: <br>• See Appendix for a deploy example. <br>• Ships capable of docking can start the game docked. Before the Place Forces step of setup, that player must declare which ships are docked and the ships they are docked to. <br>• During the System Phase, the initiative of the ship docking or deploying is used, not the initiative of the carrier ship."
      },
      "DROP": {
        name: "Drop",
        text: "See Device."
      },
      "END PHASE": {
        name: "End Phase",
        text: "The End Phase is the fifth phase of the round. During the End Phase, the following occur in this order: <br>1. Abilities that occur \"at the start of the End Phase\" form an ability queue and resolve. <br>2. Abilities that occur \"during the End Phase\" form an ability queue and resolve. <br>3. All circular tokens are removed from all ships (green, then orange). <br>4. Each card with a recurring charge icon recovers that many charges. Each card with a negative recurring charge icon loses that many charges. <br><br>• After this phase, the criteria for winning the game are checked. <br>• If the game did not end, the Planning Phase of the next round begins."
      },
      "ENEMY": {
        name: "Enemy",
        text: "All ships/devices controlled by opposing players are enemy ships/devices. Any dice that an opposing player rolls are enemy dice. This is in contrast with friendly."
      },
      "ENGAGEMENT PHASE": {
        name: "Engagement Phase",
        text: "The Engagement Phase is the fourth phase of the round. During this phase, each ship <strong>engages</strong>, one at a time, starting with the ship with the highest initiative and continues in descending order. <br><br>When a ship engages, it may perform an attack. <br>• After all ships of a given initiative have engaged, all destroyed ships are removed. Then, continuing in descending order, this process continues with all ships of the same initiative engaging and then removing all destroyed ships. <br>• If a player has multiple ships with the same initiative, the player engages them in any order, engaging one ship before engaging another ship of the same initiative value. <br>• If multiple players have ships with the same initiative, player order is used to determine the order. The first player engages all of their ships of a given initiative before the second player engages all of their ships of that initiative. <br>• Disarmed ships still engage even though they cannot perform attacks. <br>• Each ship engages only once during this phase."
      },
      "ENVIRONMENT CARDS": {
        name: "Environment Cards",
        text: "See Appendix: Environment Cards."
      },
      "EVADE": {
        name: "Evade",
        text: "Pilots can evade to fly defensively. When a ship performs an %EVADE% action, it gains one evade token. <br><br>A ship is <strong>evading</strong> while it has at least one evade token. Evade tokes are circular, green tokens. While an evading ship defends, during the Modify Defense Dice step, it can spend one or more evade tokens to change that many of its blank or %FOCUS% results to %EVADE% results. <br>• If an ability instructs a ship to gain an evade token, this is different than performing an %EVADE% action. A ship that gains the token without performing the action can still perform the %EVADE% action this round."
      },
      "FACTION": {
        name: "Faction",
        text: "There are seven factions in the game: Rebel (The Rebel Alliance), Imperial (The Galactic Empire), Scum (Scum and Villainy), Resistance, First Order, Republic (Grand Army of the Republic), and Separatist (Separatist Alliance).<br><br>All ship cards and some upgrade cards are aligned to one of these factions. A squad cannot typically contain cards from different factions. <br>• Upgrade cards can be used by any faction unless they have a restriction."
      },
      "FAIL": {
        name: "Fail",
        text: "Some effects can fail, which means the effect did not resolve as intended and instead is resolved in a default way. <br>• A ship can fail when it barrel rolls, boosts, coordinates, decloaks, deploys, jams, locks, or SLAMs. <br>• An effect that fails does not trigger any effects that would occur after a ship resolves that effect. <br>• If an action fails, the player does not choose a different action to perform and cannot choose to resolve the effect in a different way. <br>• If an action fails, since the action was not completed, that ship cannot perform a linked action. <br>• After a red action fails, the ship gains a stress token."
      },
      "FIRING ARC": {
        name: "Firing Arc",
        text: "See Arc."
      },
      "FIRST PLAYER": {
        name: "First Player",
        text: "See Player Order."
      },
      "FLANKING": {
        name: "Flanking",
        text: "See Arc."
      },
      "FLEE": {
        name: "Flee",
        text: "A ship <strong>flees</strong> if any part of its base is outside the play area at any time. A ship that flees is removed from the game. <br>• While a ship moves, the ship does not flee if only the template is outside the play area. <br>• Before a fleeing ship is removed from the game, the only effects it resolves before being removed from the game are effects that trigger when it flees. <br>• A ship cannot flee while resolving a boost, barrel roll, decloak, or SLAM. <br>• Partially executing a maneuver can cause a ship to flee if any part of its base is outside the play area after the maneuver."
      },
      "FOCUS": {
        name: "Focus",
        text: " Pilots can focus to concentrate and expand their combat prowess. When a ship performs the %FOCUS% action, it gains one focus token. <br><br>A ship is focused while it has at least one focus token. Focustokens are circular, green tokens. A focused ship follows these rules: <br>• While a focused ship performs an attack, during the Modify Attack Dice step, it may spend a focus token to change all of its %FOCUS% results to %HIT% results. <br>• While a focused ship defends, during the Modify Defense Dice step, it may spend a focus token to change all of its %FOCUS% results to %EVADE% results. <br><br>Additionally: <br>• A ship cannot spend a focus token to change %FOCUS% results to %HIT% or %EVADE% results if it does not have any %FOCUS% results. <br>• If an ability instructs a ship to gain a focus token, this is different than performing a %FOCUS% action. A ship that gains a token without performing the action can still perform the %FOCUS% action this round."
      },
      "FRIENDLY": {
        name: "Friendly",
        text: " All ships/devices controlled by the same player are <strong>friendly</strong> to each other unless a card, game mode, scenario, or other effect states otherwise. Any dice rolled by that player are friendly to those ships. This is in contrast with enemy and allied. <br>• Ships cannot perform attacks against friendly ships, unless specified otherwise. <br>• A ship is friendly to itself and can affect itself with any of its abilities that affect friendly ships, unless those abilities explicitly refer to “other” friendly ships."
      },
      "FULL ARC": {
        name: "Full Arc",
        text: "See Arc."
      },
      "FULLY EXECUTE": {
        name: "Fully Execute",
        text: "See Overlap."
      },
      "FUSE MARKER": {
        name: "Fuse Marker",
        text: "A device or obstacle is <strong>fused</strong> while it has at least one fuse marker. When a device would detonate, if it is fused, one fuse marker is removed from that device instead, and that device does not detonate. When a fused obstacle would be removed, one fuse marker is removed from that obstacle instead, and that obstacle is not removed."
      },
      "GAME LENGTH AND TRACKING ROUNDS": {
        name: "Game Length and Tracking Rounds",
        text: "Standard games are played over twelve rounds. Players track completed rounds with charge markers. At the start of the game, place twelve charge markers, flipped to their active sides, near the play area. At the end of each round, the players flip one charge marker to its inactive side. At the end of the twelfth round, the game ends. <br><br>• If all of one player’s ships are destroyed, the game ends at the end of the current round. <br><br>• Players who wish to play a longer or shorter game may agree with their opponent upon any number of rounds before Setup and place that number of charge markers for tracking rounds at the start of the game. The game ends at the end of the last agreed upon round."
      },
      "GAME MODE": {
        name: "Game Mode",
        text: "Various game modes limit which ship and upgrade cards are available for squad building. <br><br>• Some game modes have a Ban List and a Restricted List. <br><br>• The two most common game modes are Standard and Extended. The points documents found at www.atomicmassgames.com/xwing-documents detail which ships and upgrades are available during squad buildilng in each of these game modes."
      },
      "GUIDES": {
        name: "Guides",
        text: "Each ship’s base has two pairs of guides, one pair on the front and one pair on the back. Some devices also have a pair of guides. <br>• Guides on a ship’s base are ignored only while measuring range or determining whether a ship is in an arc."
      },
      "HIT": {
        name: "Hit",
        text: "During the Neutralize Results step of an attack, the attack hits if at least one %HIT% or %CRIT% result remains uncanceled. If no %HIT% or %CRIT% results remain, the attack misses."
      },
      "HULL": {
        name: "Hull",
        text: "The yellow number on a ship card is the ship’s hull value. The hull value indicates how many damage cards it must have to be destroyed. <br>• The amount of <strong>hull remaining</strong> for a ship is the difference between the hull value and the number of damage cards it has."
      },
      "ID MARKER": {
        name: "ID Markers",
        text: "ID markers relate ships in the play area to their respective ship card and any locks they have. Players must assign ID markers to each of their ships during setup. <br><br>To assign an ID marker to a ship, the player places one ID marker on the ship’s card. Then they insert the two corresponding ID markers into the tower of the ship’s base. The color of the number on the sides that face outward must match the color of the faceup marker on the ship card. <br>• Players can color their ID markers, (using a marker, brush, etc.) so long as all of their fielded ships match. <br>• During setup, players must be able to clearly differentiate which ships are on each side by using differently colored ID markers."
      },
      "ION": {
        name: "Ion",
        text: "A ship is ionized while it has a number of ion tokens relative to its size: one or more for a small ship, two or more for a medium ship, and three or more for a large ship. Ion tokens are red tokens. <br><br>A ship that is ionized cannot acquire, be assigned, or maintain locks. When a ship becomes ionized, it breaks all locks it is maintaining. During the Activation Phase, an ionized ship activates as follows: <br><br>1. The ionized ship skips its Reveal Dial step. <br><br>2. During the Execute Maneuver step, the ionized ship flips its maneuver dial faceup and executes an ion maneuver with the same direction shown on the dial. An ion maneuver is a blue speed 1 bank or straight [%BANKLEFT%, %STRAIGHT%, %BANKRIGHT%] maneuver. <br>• If an ionized ship's dial shows a stop [%STOP%] maneuver, they perform their ion maneuver as a [1 %STRAIGHT%] maneuver. <br>• The bearing, difficulty, and speed of this maneuver cannot be changed unless an ability explicitly affects the ion maneuver. <br>• If a rule or ability references an ionized ship's revealed maneuver, it references the ship's faceup dial instead. <br><br>3. During the Perform Action step, the ship can perform only the %FOCUS% action. <br><br>4. At the end of a ship's activation, if it executed an ion maneuver, it removes all of its ion tokens.<br><br>Additionally: <br>• An ionized ship cannot perform any action except the %FOCUS% action. <br>• Some special weapons inflict ion tokens instead of dealing damage. <br>• If a ship that was ionized during the Planning Phase is no longer ionized at the beginning of its activation, it activates as normal."
      },
      "INFLICT": {
        name: "Inflict",
        text: "Some special weapons inflict tokens instead of dealing damage. If an attack inflicts tokens, the defender gains the number and type of tokens specified."
      },
      "IN FRONT OF": {
        name: "In Front Of",
        text: "See Arc."
      },
      "INITIATIVE": {
        name: "Initiative",
        text: "A ship’s initiative value is the orange number to the left of the ship’s name on its ship card. Initiative is used to determine the order in which ships can use abilities during the System Phase, activate during the Activation Phase, engage during the Engagement Phase, and are placed during setup. <br>• If several abilities alter the initiative of a ship, only the most recent ability is applied. <br>◊ If the most recent effect ends (such as “at the end of the Engagement Phase”), the ship’s initiative returns to the initiative established by the most recent ability that is still active."
      },
      "JAM": {
        name: "Jam",
        text: "Pilots can jam to conduct electronic warfare and confuse other ships’ systems. When a ship performs the %JAM% action, it jams. A <strong>jamming ship</strong> is a ship that is attempting to jam by performing the following steps: <br><br>1. Measure range from the jamming ship to any enemy ships. <br>2. Choose an enemy ship at range 1. or at range 1–2 in the jamming ship's %BULLSEYEARC%. <br>3. The chosen ship gains one jam token. <br><br>A ship is <strong>jammed</strong> if it has at least one jam token. Jam tokens are circular, orange tokens. When a ship becomes jammed, the player whose effect caused the ship to gain the jam token chooses for the ship to either remove one of its green tokens or break one of its locks. If either effect is resolved, it removes the jam token. If the ship does not have any green tokens or is not maintaining any locks, it remains jammed. <br><br>After a jammed ship gains a green token or acquires a lock, the jammed ship removes that token or breaks that lock. Then it removes one jam token. <br>• Some special weapons inflict jam tokens instead of dealing damage. <br>• While a ship attempts to jam, it fails if no ship is chosen. <br>• Any abilities that cause a jammed ship to gain a green token or acquire a lock still trigger any effects that occur from resolving that ability even if the token is removed or the lock is broken. The jam token does not cause that ability to fail. <br>• If an ability instructs a ship to jam, this is different than performing a %JAM% action. A ship that jams without performing the action can still perform the %JAM% action this round. <br>• If a ship has multiple green tokens or locks, the player whose effect caused the ship to gain the jam token chooses which green token is removed or which lock is broken."
      },
      "KOIOGRAN TURN": {
        name: "Koiogran Turn",
        text: "See Bearing."
      },
      "LAUNCH": {
        name: "launch",
        text: "See Device."
      },
      "LIMITED": {
        name: "Limited",
        text: "Some ship cards and upgrade cards have limitations. These <strong>limited cards</strong> are identified by a number of bullets (•) to the left of their names. During squad building, a player cannot field more copies of cards that share that name than the number of bullets in front of the name. <br>• For example, if one bullet appears in front of a card’s name, it can be included only once in a squad. Likewise, if two bullets appear in front of a card’s name, it can be included up to twice in a squad. <br>• This restriction also applies across card types. For example, if a name has two bullets in front of it, the player could field two ship cards with that name, two upgrades with that name, one ship card and one upgrade with that name, etc."
      },
      "LINKED ACTION": {
        name: "Linked Actions",
        text: "Linked actions allow a ship to perform an action after performing another action. Linked actions can appear on a ship or upgrade card in the linked action bar just to the right of the action bar. After the ship performs the action from its action bar, it can perform the attached action listed on the linked action bar. <br>• After a ship performs an action with an attached linked action, if the player wants to resolve the linked action, it is added to the ability queue. <br>• If it has multiple actions linked from the same starting action (e.g. %FOCUS% <i class=\"xwing-miniatures-font xwing-miniatures-font-linked\"></i> %BARRELROLL% and %FOCUS% <i class=\"xwing-miniatures-font xwing-miniatures-font-linked\"></i> %BOOST%), it can choose only one linked action to add to the queue. <br>• A linked action can be performed after performing the action it is attached to even if that action was granted by a card effect or other game effect. <br>• After a ship performs a linked action, it cannot use that action to add another linked action to the ability queue. For example, if a ship has both %FOCUS% <i class=\"xwing-miniatures-font xwing-miniatures-font-linked\"></i> %BARRELROLL% and %BARRELROLL% <i class=\"xwing-miniatures-font xwing-miniatures-font-linked\"></i> %EVADE% on its action bar, it cannot use the %BARRELROLL% action from its linked action bar (attached to %FOCUS%) as the %BARRELROLL% action on its action bar to perform a linked %EVADE% action."
      },
      "LOCK": {
        name: "Lock",
        text: "Ships can lock to use their computer to acquire targeting data on environmental hazards or other ships. When a ship performs a %LOCK% action, it acquires a lock. A <strong>locking ship</strong> is a ship that is attempting to acquire a lock by performing the following steps: <br><br>1. Measure range from the locking ship to any number of objects. <br>2. Choose another object at range 0–3. <br>3. Assign a lock token to it with the number matching the ID marker of the locking ship. <br><br>An object is <strong>locked</strong> while it has at least one lock token assigned to it. Lock tokens are red tokens. While a ship has another ship locked, it follows this rule: <br>• During the Modify Attack Dice step of a ship’s attack, it can spend a lock token that it has on the defender to reroll one or more of its attack dice. <br><br>Additionally: <br>• When a ship is instructed to <strong>break</strong> a lock it has, the lock token corresponding to its ID token is removed. <br>• While acquiring a lock, it fails only if there is no valid object to choose. <br>• A ship cannot acquire or have a lock on itself. <br>• An object can be locked by more than one ship. <br>• A ship can maintain only one lock. If a locking ship already has a lock, before the chosen object would be assigned a lock token, the ship’s former lock token is removed. <br>• If an ability instructs a ship to acquire a lock, this is different than performing a %LOCK% action. A ship that acquires a lock without performing the action can still perform the %LOCK% action this round. <br>◊ If a ship is instructed to acquire a lock, the object it locks must be at range 0–3 unless otherwise specified. "
      },
      "MANEUVER": {
        name: "Maneuver",
        text: "A maneuver is a type of move that a ship can execute. Each maneuver has three components: speed (a number 0–5), difficulty (red, white, or blue), and bearing (an arrow or other symbol). Each bearing is further defined with a direction. <br><br>A ship can <strong>execute</strong> a maneuver by resolving the following steps in order:<br><br>1.<strong> Maneuver Ship:</strong> During this step, the ship moves using the matching template. <br>a. Take the template that matches the maneuver from the supply. <br>b. Set the template between the ship’s front guides (so that it is flush against the base). <br>c. Pick up and place the ship at the opposite end of the template and slide the rear guides of the ship into the template. <br>d. Return the template to the supply. <br><br>2. <strong>Check Difficulty:</strong> During this step, if the maneuver is red, the ship gains one stress token; if the maneuver is blue, the ship removes one stress token and one strain token and one deplete token. <br><br>Additionally: <br>• While executing a maneuver, if a ship would be placed at the end of the template on top of another object, it has overlapped that object. <br>• While executing a maneuver, if only the template was placed on top of another object, the ship has moved through the object. <br>• While executing a maneuver, the ship is picked up from its starting position and placed in its final position. The full width of the ship’s base is ignored except in its starting and final positions. <br>• If a stressed ship attempts to execute a maneuver with a red difficulty, the ship performs a white [2 %STRAIGHT%] maneuver instead. <br>• A card effect can cause a ship to execute a maneuver that does not appear on its dial. <br>• Some abilities reference a ship’s <strong>revealed maneuver</strong> outside of that ship’s activation. A ship’s revealed maneuver is the maneuver selected on its dial, which remains faceup next to that ship’s ship card until the next Planning Phase. <br>◊ If a ship’s dial is not revealed, or it was not assigned a dial that round, that ship does not have a revealed maneuver."
      },
      "MINE": {
        name: "Mine",
        text: "A mine is a type of device that is placed in the play area through a card effect from a %DEVICE% upgrade card. The upgrade card that corresponds to the mine has the “Mine” trait at the top of its card text. Mines can be dropped or launched during the System Phase and typically detonate after they are moved through or overlapped by a ship."
      },
      "MISS": {
        name: "Miss",
        text: "During the Neutralize Results step of an attack, the attack misses if no %HIT% or %CRIT% results remain. The attack hits if at least one %HIT% or %CRIT% result remain uncanceled. • If the attack misses, the Deal Damage step of the attack is skipped."
      },
      "MISSION POINTS": {
        name: "Mision Points",
        text: " Mission points determine who wins the game. Reference the scenario rules to determine how mission points are earned. <br><br>• At the start of the game, each player earns mission points equal to their opponent’s deficit. <br>• Players track their mission points with Victory counters."
      },
      "MOVE": {
        name: "Move",
        text: "A ship <strong>moves</strong> when it executes a maneuver or otherwise changes position using a template (such as barrel rolling or boosting). <br><br>A ship <strong>moves through</strong> an object if the template is placed on that object when the ship moves. <br>• If a ship moves through an obstacle, it suffers the effects of that obstacle. <br>• If a ship moves through a device, it can suffer effects based on the device. <br>• If a ship moves through another ship, there is no inherent effect. Due to the physical miniature being in the way, players should mark the positions of any intervening ships and temporarily remove them. To mark an intervening ship’s position, players can either use the position markers provided in the core set or place templates in the ships’ guides or along the side of the base. Then those ships are physically removed to complete the move. After the move is complete, the removed ships are returned to their original positions."
      },
      "MOVE THROUGH": {
        name: "Move Through",
        text: "See Move."
      },
      "NEGATIVE RECURRING CHARGES": {
        name: "Negative Recurring Charges",
        text: "See Charge."
      },
      "OBJECTS": {
        name: "Objects",
        text: "Ships, obstacles, and devices are all <strong>objects</strong>. The exact position of objects in the play area is tracked and restricted by game effects. <br>• Ships can acquire locks on objects. <br>• Ships can move through objects."
      },
      "OBSTACLES": {
        name: "Obstacles",
        text: "Obstacles act as hazards that can disrupt and damage ships. A ship can suffer effects by moving through, overlapping, or while being at range 0 of obstacles.  <br><br>If a ship moves through or overlaps an obstacle, it suffers an effect based on the type of obstacle after resolving its move: <br><br>• Asteroid: The ship suffers one %HIT% damage. Roll one attack die. On a %HIT% or %CRIT% result, the ship suffers an additional %HIT% damage.<br><br>• Blaze: Roll one attack die. On a %HIT% or %CRIT% result, the ship suffers one %HIT% damage; on a %FOCUS% result, it gains one stress token. Then the ship skips its Perform Action step this round. <br><br> • Debris Cloud: The ship is assigned one stress token. Roll one attack die. On a %HIT% result, the ship suffers one %HIT% damage. On a %CRIT% result, the ship suffers one %CRIT% damage. <br><br>• Electro-Chaff Cloud: The ship breaks all its locks and all locks on it and then is assigned one jam token. Roll one attack die. On a %HIT% or %CRIT% result, the ship is assigned one stress token. <br><br>• Gas Cloud: The ship breaks all its locks and all locks on it and then is assigned one strain token. Roll one attack die. On a %HIT% result, the ship is assigned one ion token. On a %CRIT% result, the ship is assigned three ion tokens. <br><br>• Loose Cargo: The ship is assigned one strain token. Roll one attack die. On a %HIT% or %CRIT% result, the ship is assigned one stress token.<br><br>• Spare Parts: The ship is assigned one strain token. Roll one attack die. On a %HIT% or %CRIT% result, the ship is assigned one stress token.<br><br>• If a ship ends a maneuver overlapping an obstacle, it skips its Perform Action step. <br><br>While a ship is at range 0 of an obstacle it may suffer different effects. <br>• <strong>Asteroid:</strong> The ship cannot perform attacks.• Debris Cloud: The ship cannot perform attacks. <br><strong>• Electro-Chaff Cloud:</strong> The ship cannot acquire locks and cannot be locked. <br><strong>• Gas Cloud:</strong> The ship cannot acquire locks and cannot be locked. The ship cannot perform attacks. <br><br>While a ship performs an attack, if the attack is obstructed by an obstacle, the defender rolls one additional defense die. <br><br>Additionally: <br>• Obstacles are placed during the Place Obstacles step of setup. <br>• Some cards can also place obstacles during the game in the same manner as devices (see Device). <br>• If an obstacle is placed such that one or more ships overlap it, those ship resolve any effects of overlapping it. <br>• A ship that is overlapping an obstacle can still perform actions granted from other game effects. <br>• For the purpose of overlapping obstacles, if a ship partially executes a maneuver, only the portion of the template that is between the starting and final positions of the ship is counted. Ignore the portion of the template that the ship moved backward along to resolve the overlap. <br>• If a ship moves through or overlaps more than one obstacle, it suffers the effects of each obstacle, starting with the obstacle that was closest to the ship in its starting position and proceeding along the template. <br>• Before a ship moves, if it is at range 0 of an obstacle, it does not suffer the effects of that obstacle unless it moves through or overlaps that obstacle again. <br>• Before a ship moves, if it is overlapping an obstacle, it does not suffer the effects of moving through that obstacle. <br>• Huge ships have separate rules related to obstacles (see Appendix: Huge Ships)."
      },
      "OBSTRUCTED": {
        name: "Obstructed",
        text: "An attack is <strong>obstructed</strong> if the attacker measures range through an object. If a ship or device obstructs an attack, there is no inherent effect. If an obstacle obstructs an attack, there is an additional effect. <br>• If at least one obstacle obstructs an attack, the defender rolls one additional defense die during the Roll Defense Dice step. <br>• The attacker measures from the closest point of its base to the closest point of the defender’s base that is in the attack arc, therefore the attacker cannot measure range from or to another point in order to avoid measuring through an object. <br>◊ If multiple points are at equal distance from the attacker (for example, if the attacker and defender are parallel), the attacker chooses one of those lines for measuring range from or to another point in order to avoid measuring through an object. <br>◊ If multiple points are at equal distance from the attack (for example if the attacker and defender are parallel), the attacker chooses one of those lines for measuring range. In the example, the X-wing can choose to make this attack be obstructed or not."
      },
      "OVERLAP": {
        name: "Overlap",
        text: "While a ship executes a maneuver or otherwise moves, it <strong>overlaps</strong> an object if the ship’s final position would physically be on top of an object. <br><br>A ship <strong>fully</strong> executes a maneuver if it does not overlap a ship. If a ship executes a maneuver and overlaps a ship, it must <strong>partially</strong> execute that maneuver by performing the following steps: <br><br>1. Move the ship backward along the template until it is no longer on top of any other ships. While doing so, adjust the position of the ship so that the hashmarks in the middle of both sets of guides remains centered over the line down the middle of the template. <br>2. Once the ship is no longer on top of any other ship, place it so that it is touching the last ship it backed over. (This may result in the ship not leaving its initial position.) Then, after the Check Difficulty step, it suffers an effect based on what ship it overlapped that initially forced it to partially execute the maneuver. <br><br>• If the overlapped ship was a friendly or allied ship, roll an attack die. On a %HIT% or %CRIT% result, the ship suffers one 󲁧 damage. Then the ship skips its Perform Action step. <br><br>• If the overlapped ship was an enemy ship, if it is not stressed, it may immediately perform a focus or calculate action from its action bar, treating the action as red. Then the ship skips its Perform Action step. <br>◊ The ship cannot perform any additional actions during its activation. <br><br>• If there was a simultaneous overlap of friendly or allied and enemy ships, resolve the effect for overlapping a friendly or allied ship. <br>• Even if a ship partially executes a maneuver, it is still treated as having executed a maneuver of the indicated speed, bearing, and difficulty. <br><br>Additionally: <br>• After an object is placed, if it is placed underneath one or more ships, those ships resolve any effects of overlapping the object."
      },
      "PARTIALLY EXECUTE": {
        name: "Partially Execute",
        text: "See Overlap."
      },
      "PILOT ABILITY": {
        name: "Pilot Ability",
        text: "See Abilities."
      },
      "PLANNING PHASE": {
        name: "Planning Phase",
        text: "The Planning Phase is the first phase of the round. During the Planning Phase, each player secretly sets a maneuver for each of their ships. To set a ship’s maneuver, the player takes a dial matching the ship’s type and rotates the dial until the arrow points at the desired maneuver. Then the dial is placed facedown in the play area next to the matching ship. After all ships have dials assigned to them, players roll to determine player order as follows: <br>a. Each player rolls three attack dice. The player with the most %CRIT% results is the first player. <br>b. In the case of a tie, the first player is the player with the most %FOCUS% results. <br>c. If there is still a tie, the first player is the player with the most %HIT% results. <br>d. If there is still a tie, players reroll the dice and follow the above rules until the tie is broken. <br>• This roll cannot be modified by game effects. <br><br>After player order has been determined, play proceeds to the System Phase. <br>• The phase ends after players roll to determine player order.<br>• Players can assign their dials in any order. <br>• Players are allowed to change their selections on their dials until the players have rolled to determine player order. <br>• Players are allowed to change their selections on their dials as long as the phase has not ended. <br>• A player must inform their opponent if they wish to touch or look at one of their dials during the System or Activation Phase. <br>• Ionized ships are not assigned dials. <br>• If a player forgets to set a maneuver dial for a ship during the Planning Phase, during its activation the ship gains a stress, then performs a stress maneuver. The stress maneuver is a white [%STRAIGHT% 2] maneuver."
      },
      "PLAY AREA": {
        name: "Play Area",
        text: "The play area is the defined area on a flat surface on which the ships are placed. After executing a maneuver, if any part of a ship’s base is outside the play area, that ship has fled. <br><br>The recommended play area for a standard 200-point dogfight is 3’ x 3’ (91 cm x 91cm). If playing with other squad point totals, the players can expand or contract the play area in one or both dimensions to create a suitable space for the game."
      },
      "PLAYER MARKER": {
        name: "Player Marker",
        text: "Player markers are used in some scenarios to indicate which player controls an objective."
      },
      "PLAYER ORDER": {
        name: "Player Order",
        text: "Player order is used as a tiebreaker for many game effects. If players are instructed to resolve an effect in <strong>player order</strong>, the first player resolves all of their effects first, then the second player resolves all of their effects. <br><br>During the Determine First Player step of setup, the player whose squad has the lowest squad point total chooses which player is the first player. The first player is assigned the First Player marker. <br><br>If players are tied for squad point total, one player calls either “hits” (%HIT% or  %CRIT%), or “misses” (blank or %FOCUS%). Then the other player rolls one attack die. If the player chose the set of results that matches the die, that player chooses which player is the first player; otherwise the other player chooses. <br>• During the System, Activation, and Engagement Phases, player order is used as a tiebreaker after initiative. <br>• When playing with more than two players, player order is determined for all players involved. The player with the lowest squad point total chooses one player to be the first player. Then the player with the next lowest squad point total chooses another player to be the second player. This procedure continues until all players have been assigned a player number."
      },
      "POSITION MARKER": {
        name: "Position Marker",
        text: "The position marker is used to assist with tracking the position of intervening ships when attempting to move ships. To use the position marker, place it at the corner of an intervening ship, aligning the guides with the holes in the position marker. This will track the position of the ship in order to place it back in the play area accurately."
      },
      "PRIMARY WEAPON": {
        name: "Primary Weapon",
        text: "Each ship has up to two primary weapons listed on its ship card. Each primary weapon has an arc symbol and a red attack value. During a ship’s attack, it chooses a weapon to perform an attack with. If it performs an attack using a primary weapon, the attack value indicates how many attack dice it rolls during the Roll Attack Dice step and the arc symbol indicates where the defender must be located. <br>• A primary weapon requires the attack range to be range 1–3 and has no cost by default. <br>• Since primary weapons are not special weapons, they do not benefit from abilities that trigger while performing a special attack."
      },
      "RANGE": {
        name: "Range",
        text: "The <strong>range</strong> is the distance between two objects as measured by the range ruler. The range ruler is divided into three numbered range bands. <br><br>To measure range between two objects, place the range ruler over the point of the first object that is closest to the second object, then aim the other end of the ruler toward the point of the second object that is closest to the first object. The ships are <strong>at</strong> the range that corresponds to the range band that isover the closest point of the second object. <br><br>While measuring <strong>attack range</strong> for an attack, the attacker measures from their attack arc to the closest point of the target ship that is <strong>in</strong> the attacker’s attack arc. <br>• The following terms are used concerning range: <br>◊ <strong>Range #–#:</strong> The range includes all of the range bands from the minimum to the maximum specified. <br>◊ <strong>At:</strong> An object is at a specified range if the closest point of it is inside that range. <br>◊ <strong>Within:</strong> An object is within a specified range if the entirety of it is inside that range. <br>◊ <strong>Beyond:</strong> An object is beyond a specified range if no part of it is between the specified range and the object range is being measured from. <br><br>• While measuring range to a ship, range is measured to the closest point of the ship’s base, not its ship token nor the miniature itself. <br>• While measuring range to a non-ship object, range is measured to the point of that object that is closest to the ship’s base. <br>• While measuring range, players use a single edge of the range ruler; the width and thickness of the ruler are irrelevant. <br>• Range 0 does not appear on the range ruler, but is used for describing the range of objects that are physically touching. <br>◊ After a ship partially executes a maneuver, it is at range 0 of the last ship it overlapped. <br>◊ An object is at range 0 of an obstacle or device if it is physically on top of it. <br>◊ A ship is at range 0 of another ship if it is physically touching another ship. <br>◊ If two ships are at range 0 of each other, they remain at range 0 until one of the ships moves or rotates in a way that results in their bases no longer being in physical contact. <br>◊ Although rare, it is possible for a ship to move in such a way that it is at range 0 of another ship (in physical contact with it) without having overlapped it."
      },
      "REMOVED FROM THE GAME": {
        name: "Removed From The Game",
        text: "After a ship is destroyed or flees,it is <strong>removed from the game.</strong> If a ship is removed from the game, it returns all of its tokens to the supply, its ship card is flipped facedown, and the ship is placed on top of its ship card. <br>• At the end of a round, if all of a player’s ships have been removed from the game, the game ends and the other player wins. <br>• Ships that are placed in reserve are not removed from the game."
      },
      "RESERVE": {
        name: "Reserve",
        text: "Ships can sometimes be placed in reserve from card effects. A ship that is placed in reserve is placed on its ship card. While a ship is in reserve, it is not assigned a dial, it cannot perform actions, and it cannot attack. <br>• A ship that is placed in reserve will have an effect that causes it to be placed in the play area.<br>• Ships that are placed in reserve are not removed from the game. <br>• The abilities of a ship in reserve are inactive unless the ability explicitly allows it to be used while it is in reserve. <br>• A ship that is docked is placed in reserve. <br>• During the End Phase, a ship that is in reserve still removes all circular tokens and recovers charges on all of its cards with recurring charge icons."
      },
      "REVEAL": {
        name: "Reveal",
        text: "See Activation Phase."
      },
      "REVERSE BANK": {
        name: "Reverse Bank",
        text: "See Bearing."
      },
      "REVERSE STRAIGHT": {
        name: "Reverse Straight",
        text: "See Bearing."
      },
      "ROUND": {
        name: "Round",
        text: "A single round consists of five phases resolved in the following order: <br>1. Planning Phase <br>2. System Phase <br>3. Activation Phase <br>4. Engagement Phase <br>5. End Phase <br><br>The first round starts after setup."
      },
      "ROTATE": {
        name: "Rotate",
        text: "Pilots can rotate to alert a gunner or aim one of the ship’s turret-mounted armaments. When a ship performs the %ROTATEARC% action, it rotates the turret arc indicator to select any other standard arc. <br>• If a ship rotates a double turret arc indicator, it must select the other two standard arcs it was not already selecting. <br>• If an ability instructs a ship to rotate its %SINGLETURRETARC% indicator, this is different than performing a %ROTATEARC% action. A ship that rotates its %SINGLETURRETARC% indicator without performing the action can still perform a %ROTATEARC% action this round. <br>• This is distinct from an ability that instructs a ship to \"rotate your ship [a number of degrees],\" which is described under Rotate a Ship."
      },
      "ROTATE A SHIP": {
        name: "Rotate A Ship",
        text: "Some abilities and effects instruct a player to \"rotate a ship 90˚\" independent of a maneuver. These effects could also read \"rotate your ship [a number of degrees]\" or \"rotate [a number of degrees],\" but importantly, they do not simply read \"rotate\" (which refers to the rotate action and its effect). <br>• Rotating a ship does not count as moving. <br>• If rotating a ship would cause its base to overlap a ship (such as if the front or rear guides would physically be placed over that ship's base), it cannot be rotated and the effect is not resolved. <br>• If rotating a ship would cause its base to overlap a non-ship object (such as an obstacle or device), it does not resolve the effects of overlapping that object. However, it is at range 0 of that object, and applies any effects that entails."
      },
      "SECRET CONDITIONS": {
        name: "Secret Conditions",
        text: "See Condition Cards."
      },
      "RANGE BONUS": {
        name: "Range Bonus",
        text: "During an attack, the attacker or defender can roll additional dice depending on the attack range. For attack range 1, the attacker rolls one additional attack die during the Roll Attack Dice step. For attack range 3, the defender rolls one additional defense die during the Roll Defense Dice step. <br>• Range bonuses are applied for all attacks unless stated otherwise. Some special weapons have a small ordnance icon on them to indicate that range bonuses cannot be applied with attacks using those weapons. <br>• Although the range bonus applies at range 0, a ship cannot normally perform a primary attack at range 0. <br>• Huge ships have additional rules for attacks at range 4 and 5. See Appendix: Huge Ships. "
      },
      "REINFORCE": {
        name: "Reinforce",
        text: "Pilots can reinforce to angle their deflector shields and increase the defensiveness of a portion of their ship. When a ship performs the %REINFORCE% action, it gains a reinforce token with either the fore or aft side faceup. <br><br>A ship is <strong>reinforced</strong> while it has a reinforce token assigned to it. Reinforce tokens are circular, green tokens. While a reinforced ship defends, if the attacker is inside the full arc specified by the reinforce token and not in the other full arc, the token provides an effect. The attacker needs to be in the defender’s %FULLFRONTARC% arc for the fore reinforce token or be in the defender’s %FULLREARARC% arc for the aft reinforce token. <br><br>During the Neutralize Results step, if the attack would hit and there is more than one %HIT%/%CRIT% result remaining, one %EVADE% result is added to cancel one result. <br>• A ship can have more than one reinforce token. If a ship has multiple of the same type of reinforce token, their effects are applied one at a time. Thus, for two reinforce tokens to both apply their effect, there would need to be at least three %HIT%/%CRIT% results remaining. <br>• When a ship gains a reinforce token, unless specified otherwise, the player that controls that ship chooses whether it gains a fore reinforce token or an aft reinforce token. <br>• A ship does not spend the reinforce token when resolving its effect. <br>• If an ability instructs a ship to gain one reinforce token, this is different than performing a %REINFORCE% action. A ship that gains the token without performing the action can still perform the %REINFORCE% action this round. <br>• Reinforce can be used against attacks at range 4–5 even the defender's %FULLFRONTARC% or %FULLREARARC% normally only extends to range 3. If the attacker is at range 4–5, treat the defender's %FULLFRONTARC% or %FULLREARARC% arc as extending to range 5 for the purposes of determining which arc the defender is in for reinforce (but notfor any other effects or abilities)."
      },
      "RELOAD": {
        name: "Reload",
        text: "Pilots can reload to rearm ordnance tubes by moving around ammo on their ship. When a ship performs the %RELOAD% action, it reloads by performing the following steps: <br>1. Choose one of the ship’s equipped %TORPEDO%,  %MISSILE%, or %DEVICE% upgrade cards that has fewer active %CHARGE% than its charge limit. <br>2. That card recovers one %CHARGE%. <br>3. The ship gains one disarm token. <br><br>Additionally: <br>• If an ability instructs a player to reload, this is different than performing a %RELOAD% action. A ship that reloads without performing the action can still perform the %RELOAD% action this round. "
      },
      "REMOTES": {
        name: "Remotes",
        text: "Remotes are devices that have initiative, agility, and hull values, and can be attacked. Ships can move through, overlap, or be at range 0 of remotes. <br><br><h5>Attacking Remotes</h5> A remote can be declared as the defender. While attacking a remote, treat it as a ship, with the following exceptions and notes: <br>• Effects that refer to “friendly ships” or \"allied ships\" do not apply to a remote. <br>• Effects that refer to “enemy ships” only apply to a remote if the attacker is the source of the effect. <br>• If a remote has printed arcs and center lines, these arcs extend from range 0–3. A ship can be in these arcs or zones as it would be with another ship. <br>• If a remote does not have a midway line, a ship cannot be in front of, behind, or flanking it. <br>• If a remote does not have any arcs, a ship cannot be in or outside of any of that remote’s arcs. <br>• An attack made against a remote can be obstructed and range bonuses are applied to it as normal. <br>• If a remote does not have specified size, it is neither smaller nor larger than a ship for the purposes of effects. <br><br><h5>Damaging Remotes</h5> If a remote suffers one or more %HIT%/%CRIT% damage, deal that many facedown damage cards to it. If it has a number of damage cards greater than or equal to its hull value, it is destroyed. After a remote is destroyed, remove it from the play area and shuffle any damage cards assigned to it back into the damage deck. If the attack occurred at the same initiative as the remote’s initiative, it is removed after all effects at that initiative are resolved, per Simultaneous Fire. <br><br><h5>Using Remotes</h5> A remote resolves effects during the System Phase, activates during the Activation Phase, and engages during the Engagement Phase at its listed initiative value, resolving any effects specified on its card for these phases. During any other phase, it resolves any abilities listed on its remote card that apply during that phase. Additionally, the following apply to remotes: <br>• A remote cannot perform actions or be assigned tokens except for locks. <br>• A remote can be assigned markers or counters if an effect instructs it— place these on its remote card. <br>• If an effect  instructs a player to place that a remote on a ship card, pick it up and place it on the relevant ship card. It can be affected only by game effects that return it to the play area. Its damage cards are not removed. <br>• Some devices cause damage to remotes, as described in their individual entries. If a device does not state that it affects remotes, it does not affect remotes. <br><br><h5>Relocating Remotes</h5> If an effect <strong>relocates</strong> a remote, its controlling player picks it up and places it in the new location as instructed by the effect. Additionally: <br>• An effect might instruct a player to relocate a remote <strong>forward</strong> using a specific template (or a choice of several templates). To do this, the player places the listed template at the remote's front guides, picks up the remote, and places the remote's rear guides at the other end of the template, similar to moving a ship. <br>• If a remote would be relocated such that any part of it is outside of the play area, it flees in the same manner as a ship, and is removed."
      },
      "SEGNOR’S LOOP": {
        name: "Segnor's Loop",
        text: "See Bearing."
      },
      "SETUP": {
        name: "Setup",
        text: "Before playing, resolve the following steps: <br>1. <strong>Gather Forces:</strong> Each player places their ships and upgrade cards on the table in front of them. For each ship that has a shield value, charge limit, or Force capacity, place the corresponding %SHIELD%, %CHARGE%, or %FORCE% above the ship and/or upgrade cards. Each player assigns ID markers to each of their ships. <br>2. <strong>Determine Player Order:</strong> Randomly determine the first player as follows: <br>a. Each player rolls three attack dice. The player with the most %CRIT% results is the first player. <br>b. In the case of a tie, the first player is the player with the most %FOCUS% results. <br>c. If there is still a tie, the first player is the player with the most %HIT% results. <br>d. If there is still a tie, players reroll the dice and follow the above rules until the tie is broken. <br><br>• This roll cannot be modified by game effects. <br>3. <strong>Establish Play Area:</strong> Establish a 3’ x 3’ (91 cm x 91 cm) play area on a flat surface or use a game mat, such as the Fantasy Flight Games Starfield Game Mat</strong>. Then players pick opposite edges of the play area to be their player edges. <br>4. <strong>Place Obstacles:</strong> In player order, players take turns choosing an obstacle and placing it into the play area until all six obstacles have been placed. Obstacles must be placed beyond range 1 of each other and beyond range 2 of each edge of the play area. <br>5. <strong>Place Forces:</strong> Players place their ships into the play area in initiative order from lowest to highest initiative, using player order as a tiebreaker. Ships must be placed within range 1 of their player edge. When a ship with a turret arc indicator is placed, the player rotates the arc to select a standard arc. Each ship with a turret arc indicator may rotate its indicator when the ship is placed. <br>6. <strong>Prepare Other Components:</strong> Shuffle the damage deck and place it facedown outside the play area. If the players have more than one damage deck, each player uses their own deck. Then the supply of range rulers, templates, dice, and tokens is created near the play area. <br><br>Additionally: <br>• If a card has the <strong>“Setup:”</strong> header, the ability that follows the header is resolved during the appropriate step of setup"
      },
      "SHIELDS": {
        name: "Shields",
        text: "Shields(%SHIELD%) are a type of charge. See Charges."
      },
      "SHIP": {
        name: "Ship",
        text: "A ship is composed of a plastic miniature, base, pegs, a ship token, and ID tokens. <br>• A ship’s plastic miniature must match the ship’s type as indicated on the ship card. <br>• A ship must use the dial that matches the ship’s type. <br>• Some plastic miniatures extend beyond their plastic base. For this reason, the miniature does not affect any game mechanics. The miniature may overlap obstacles and hang over the edge of the play area without issue. <br><br>If a miniature would touch another miniature or disrupt a ship’s movement, the players should add or remove one peg from the base to prevent this contact. Otherwise, the players can temporarily remove the miniature from its base until ships have moved to allow it to be returned."
      },
      "SHIP ABILITIES": {
        name: "Ship Abilities",
        text: "Some ships have ship abilities on their ship cards listed below a pilot ability or flavor text. Ship abilities are the same across all pilots for a type of ship. <br>• Some ship abilities can have <strong>“Action:”</strong> headers. These are called <strong>ship ability actions.</strong> These actions are not on a ship’s action bar."
      },
      "SHIP SIZES": {
        name: "Ship Sizes",
        text: "There are four different ship sizes: small, medium, large, and huge. <br><br>A small ship uses a plastic base that is about 1-9/16” (4 cm) long. The rules of <strong>X-Wing</strong> are written for small ships and therefore there are no special exceptions for small ships. <br><br>A medium ship uses a plastic base that is about 2-3/8” (6 cm) long. Medium ships have the following exceptions: <br>• A medium ship requires two ion tokens before it is ionized and two tractor tokens before it is ractored. <br>• Medium ships barrel roll differently (including while decloaking). <br><br>A large ship uses a plastic base that is about 3-1/8” (8 cm) long. Large ships have the following exceptions: <br>• A large ship requires three ion tokens before it is ionized and three tractor tokens before it is tractored. <br>• Large ships barrel roll differently (including while decloaking). <br>• During setup, a large ship’s base may extend outside of range 1 as long as it fills the length of that area. A large ship cannot be placed with any portion of its base outside the play area. <br><br>A huge ship uses more than one plastic base. Huge ships have many additional rules. They were introduced in the first edition of X-Wing and will be reintroduced in an upcoming product. "
      },
      "SHIP TYPE": {
        name: "Ship Type",
        text: "Each ship has a ship type that is identified by the name of the type of ship listed on the bottom of its ship cards. <br>• Each ship must use the dial that matches their ship type. <br>• Some upgrade cards have ship restrictions that refer to ship type."
      },
      "SIDESLIP": {
        name: "Sideslip",
        text: "A sideslip is an advanced maneuver using a turn (%TURNLEFT% or %TURNRIGHT%) or bank (%BANKLEFT% or %BANKRIGHT%) template. A sideslip is executed by performing the following steps: <br>1. Place the narrow end of the template flush with the ship's side. <br>◊ For a left (%TURNLEFT% or %BANKLEFT%) sideslip, place the template on the right side of the ship. <br>◊ For a right (%TURNRIGHT% or %BANKRIGHT%) sideslip, place it on the left side of the ship. <br>Align the center line of the template to the center hashmark of the base. The other end of the template must be in the ship's %FULLFRONTARC%. <br>2. Pick the ship up and place it at the other end of the template. Align the center hashmark on the opposite side of the ship to the center line of the template. <br><br>Additionally: <br>• A sideslip is executed by placing the maneuver template in the same orientation that it would be placed in front of the ship, but placing it at the center line of the ship instead. This means that a sideslip that moves a ship to the right is dialed in for the left maneuver and uses the left (%TURNLEFT% or %BANKLEFT%) template, and vice-versa. <br>• If the ship cannot fully execute a sideslip, it partially executes that maneuver using the left/right center line of the ship base (instead of the front/rear center line of the ship base, as it would normally) to determine its final position."
      },
      "SIMULTANEOUS FIRE": {
        name: "Simultaneous Fire",
        text: "To represent that ships with the same initiative are essentially attacking at the same time, if a ship is destroyed during the Engagement Phase, it is removed after all ships that have the same initiative as the currently engaged ship have engaged."
      },
      "SLAM": {
        name: "Slam",
        text: "Pilots can SLAM by activating their SubLight Acceleration Motors and careening through space at incredible speeds. A ship performs a %SLAM% action by performing the following steps: <br>1. The player chooses a maneuver from the ship’s dial. The maneuver must match the speed of the maneuver that the ship executed this round. <br>2. The ship executes the chosen maneuver. <br>3. The ship gains one disarm token. <br>A ship can perform a %SLAM% action only during its activation in the Activation Phase. Therefore a ship cannot perform a %SLAM% action if it is granted an action at any other time. <br>• A  %SLAM% action fails if the final position of the ship would cause it to flee. <br>• When a ship performs a  %SLAM% action, it has performed an action as well as executed a maneuver for the sake of abilities."
      },
      "SOLITARY": {
        name: "Solitary",
        text: "A squad cannot include more than one card of the same upgrade type with the “solitary” restriction. For example, since all  %TACTICALRELAY% (Tactical Relay) upgrades have the solitary restriction, no squad can include more than one  %TACTICALRELAY% upgrade."
      },
      "SPECIAL WEAPON": {
        name: "Special Weapon",
        text: "Special weapons appear as <strong>“Attack:”</strong> headers in card text. They provide additional types of attacks other than a ship’s primary weapon(s). <br><br>Special weapons have a combination of arc requirements, range requirements, attack value, and possibly other requirements. The <strong>arc icon</strong> indicates where the target needs to be in order to use this attack. The <strong>range requirement</strong> indicates the span of legal attack ranges. The red <strong>attack value</strong> is used to determine the number of attack dice to roll during the Roll Attack Dice step. For cards with special requirements, all of those requirements must be met in order to perform that attack. <br>• Some special weapons have a small <strong>ordnance icon</strong> on them to indicate that range bonuses are not applied with attacks using those weapons. <br>• Arc restrictions appear as arc icons listed to the left of the attack value. The arc restriction requires that the defender be in that arc of the attacker. <br>• Range requirements are white numbers that appear as a range of numbers listed below the attack value and arc restriction. <br>• Some attacks also have special requirements listed in parentheses after the header. <br>◊ The “Attack ( %LOCK%):” header indicates that the attacker must have a lock on the defender. <br>◊ The “Attack (%FOCUS%):” header indicates that the attacker must have a focus token. <br>• Since special weapons are not primary weapons, they do not benefit from abilities that trigger while performing a primary attack. <br>• Any type of upgrade card attack (such as a %CANNON% attack) is a special attack."
      },
      "SPEED": {
        name: "Speed",
        text: "Each maneuver has three components: speed (a number 0–5), difficulty (red, white, or blue), and bearing (an arrow or other symbol). <br>• If the speed of a maneuver is increased or decreased, the speed of the maneuver is restricted to the templates that exist. <br>◊ For example, the speed of a [3 %SLOOPRIGHT%] cannot be increased and the speed of a [1 %STRAIGHT%] cannot be decreased. <br>• The speed of a [0 %STOP%] cannot be increased or decreased. <br>• Even if a ship partially executes a maneuver, it is still treated as having executed a maneuver of the indicated speed."
      },
      "SQUAD BUILDING": {
        name: "Squad Building",
        text: "Each player builds a squad by choosing ships and upgrades whose total squad point cost does not exceed the total defined by the game mode. The recommended squad point total for a standard dogfight is 200 points. A player can build a squad using ship and upgrade cards with some restrictions: <br>• Each ship has an upgrade bar which is a list of upgrade icons that limit the number of upgrades and types of upgrades that the ship can equip. The <strong>X-Wing Squad Builder</strong> will enforce these rules. Additionally, a list of all ships’ upgrade bars is also available at X-Wing.com. <br>• Nearly all game modes limit ships to a specific faction to choose from. All ship cards must be from a single faction. Some upgrade cards have faction restrictions listed in their restriction field. <br>• Some upgrade cards have ship-size restrictions. Only ships of the given size can equip them. <br>• Some upgrade cards have ship-type restrictions. Only ships of that type can equip them. <br>• Some upgrade cards have builder keyword restrictions. Only ships with those builder keywords can equip them. Builder keywords are found in the points PDFs provided at X-Wing.com, and are automatically taken into account in the X-Wing Squad Builder. <br>• A squad’s cards are restricted by the rules of limited cards and solitary cards. <br>• A ship cannot equip more than one copy of an upgrade card with the same name."
      },
      "SQUAD POINTS": {
        name: "Squad Points",
        text: "Each ship card and upgrade card has a squad point cost associated with it. This value is used during squad building in order to build lists that are legal for different game modes. These values are available from the <strong>X-Wing Squad Builder</strong> and are also available at X-Wing.com."
      },
      "STANDARDIZED": {
        name: "Standardized",
        text: "Some upgrade cards have the <strong>standardized</strong> restriction. During squad building, if a player selects a ship with a standardized card equipped, each ship of that ship type (i.e., full ship name) in that player's squad must be equipped with a copy of that standardized card."
      },
      "STANDARD ARC": {
        name: "Standard Arc",
        text: "See Arc."
      },
      "STANDARD SHIP": {
        name: "Standard Ship",
        text: "A standard ship is any non-huge ship (see Appendix: Huge Ships)."
      },
      "STATIONARY": {
        name: "Stationary",
        text: "See Bearing."
      },
      "STRAIGHT": {
        name: "Straight",
        text: "See Bearing."
      },
      "STRAIN": {
        name: "Strain",
        text: "A ship is <strong>strained</strong> while it has at least one strain token. While a strained ship defends, it rolls 1 fewer defense die. The strain token is a red token. <br>• After a strained ship applies the effect to roll 1 fewer defense die this way, it removes 1 strain token. <br>• After a strained ship executes a blue maneuver, it removes 1 strain token."
      },
      "STRESS": {
        name: "Stress",
        text: "A ship is stressed while it has at least one stress token. A stressed ship cannot execute red maneuvers or perform actions. The stress token is a red token. <br>• A ship receives one stress token while it executes a red maneuver or after it performs a red action. Additionally, a ship removes one stress token while it executes a blue maneuver. <br>• If a stressed ship attempts to execute a red maneuver, it instead executes a white [2 %STRAIGHT%] maneuver. <br>◊ After a stressed ship reveals a red maneuver, abilities that change the maneuver can be used. After resolving these abilities, if the ship would still execute a red maneuver, it instead executes a white [2 %STRAIGHT%] maneuver. <br>• Huge ships have additional rules for stress (see Appendix: Huge Ships)."
      },
      "STRUCTURE": {
        name: "Structure",
        text: "Structures are an upcoming game mechanic that some cards reference for the sake of future compatibility. There are currently no structures”"
      },
      "SUFFER DAMAGE": {
        name: "Suffer Damage",
        text: "See “Damage.”"
      },
      "SUPPLY": {
        name: "Supply",
        text: "The supply is the shared set of game components that are not being used by any player, such as unassigned focus tokens, maneuver templates, etc."
      },
      "SYSTEM PHASE": {
        name: "System Phase",
        text: "The System Phase is the second phase of a round. During this phase, the sequence of play starts with the ship with the lowest initiative and continues in ascending order. <br><br>During this phase, each ship gets an opportunity to choose and resolve any abilities that are explicitly resolved during the System Phase. <br>• Without having specific upgrades, abilities, or tokens, most ships have no effects that can be resolved during this phase. Some abilities that can be used at this time include dropping and launching devices, decloaking,and deploying and docking ships. <br>• If a player has multiple ships with the same initiative value, the player resolves abilities in any order; resolving any abilities for one ship before resolving abilities for another ship of the same initiative value. <br>• If multiple players have ships with the same initiative value, player order is used to determine the sequence. The first player resolves any abilities of their ships with that initiative value in any order, then the second player resolves any abilities of their ships with that initiative value in any order, and so on."
      },
      "TALLON ROLL": {
        name: "Tallon Roll",
        text: "See Bearing."
      },
      "TARGET": {
        name: "Target",
        text: "The target of an attack is declared during the Declare Target step. Asuccessfully targeted enemy ship is the defender."
      },
      "TIMING": {
        name: "Timing",
        text: "There are several terms used to indicate the specific timing of an effect: <br>• <strong>Before:</strong> The effect resolves immediately preceding the timing specified. <br>• <strong>At the start of:</strong> This timing is used with a specific phase or step. The effect triggers before anything occurs during that phase or step. <br>• <strong>While:</strong> This term is often used in combination with multi-stepped game effects such as an attack, an action, or a maneuver. Although less specific than the other timings, this term is used to narrow down when the ability is resolved during the round. Additional verbiage is required to identify when exactly the effect is applied. <br>◊ For example, in the context of an attack, if the ability rolls additional attack dice, the ability triggers during the Roll Attack Dice step. If the ability modifies defense dice, the ability triggers during the Modify Defense Dice step. <br>• <strong>At the end of:</strong> This timing is used with a specific phase or step of ship’s activation. This effect triggers after the normal effects of that phase or step have occurred. <br>• <strong>After:</strong> The effect resolves immediately following the timing specified. <br>The ability queue is used to resolve abilities that would resolve simultaneously."
      },
      "THREAT VALUE": {
        name: "Threat Value",
        text: "Instead of using squad points, Quick Build cards use threat value, which is sometimes represented with the ?? icon,"
      },
      "TITLE": {
        name: "Title",
        text: "A title is a type of upgrade that is used to represent a very specific version of a ship. Therefore, each title is restricted to a specific ship type. For example, the Millennium Falcon is a %TITLE% upgrade."
      },
      "TOKENS": {
        name: "Tokens",
        text: " Some abilities cause ships to gain, spend, or remove tokens. Tokens are used to track effects and come in a variety of colors. <br>• When a ship is instructed to gain a token, a token from the supply is placed in the play area next to the ship. <br>• When a ship is instructed to spend a token or there is an instruction to remove a token from a ship, a token of that type is returned from that ship to the supply. <br>• When a ship is instructed to transfer a token to another ship, it is removed from that ship and assigned to the other ship. <br>◊ If a ship involved in a transfer is not able to remove or gain the token involved, the transfer cannot take place. <h5>Token Colors and Shapes</h5> To help with memory, the token’s color and shape indicates both when the token is removed and whether the effect is positive or negative. <br>• Green and orange tokens are removed during the End Phase. These tokens are both circular. <br>• Blue and red tokens have special criteria for when they can be removed or spent. These tokens are diamond shaped. <br>Additionally: <br>• The physical position of a token in the play area does not provide any effect and is merely representational of belonging to the ship."
      },
      "TRACTOR": {
        name: "Tractor",
        text: "A ship is <strong>tractored</strong> while it has equal to or greater than a specific number of tractor tokens, according to its size: a small ship requires at least one tractor token, a medium ship requires at least two tractor tokens, and a large ship require at least three tractor tokens. A tractor token is a orange token. The first time a ship becomes tractored each round, the player whose effect applied the tractor token may choose one of the following effects: <br>• Perform a barrel roll using the [1 %STRAIGHT%] maneuver template. The player applying the effect selects the direction of the barrel roll and the ship’s final position. <br>• Perform a boost using the [1 %STRAIGHT%] maneuver template. <br>This move cannot cause the ship to move through or overlap an obstacle. After a ship is moved this way, if an opponent moved it, the ship's player may choose to have the ship rotate 90° to the left or right. If they do, the ship gains one stress token. <br>While a tractored ship defends, it rolls one fewer defense die. <br>• Some special weapons inflict tractor tokens instead of dealing damage. <br>• Huge ships have additional rules for tractor tokens (see Appendix: Huge Ships)."
      },
      "TURN": {
        name: "Turn",
        text: "See Bearing."
      },
      "TURRET ARC": {
        name: "Turret Arc",
        text: "See Arc."
      },
      "UPGRADE CARDS": {
        name: "Upgrade Cards",
        text: "When building a squad, a player can field upgrades for their ships by paying their associated loadout point cost. When building a squad, each ship will have a loadout value and an upgrade bar that shows how many and which types of upgrades that ship can equip. If there is a %TITLE% or %CONFIGURATION% available for the ship, it will list that here as well. Upgrades also have their own squad point cost.<br><br> Some upgrade cards have one or more of the following rules in their restrictions box: <br>• <strong>Rebel/Imperial/Scum:</strong> This upgrade can be equipped only to a ship of the specified faction.<br>• <strong>Small/Medium/Large/Huge ship:</strong> This upgrade can be equipped only to a ship of the specified size. <br>• <strong>Ship-type:</strong> If there is a type of ship listed, this upgrade can be equipped only to a ship of the specified type. <br>• <strong>Action:</strong> If there is an action icon, this upgrade can be equipped only to a ship with that action on its action bar. This does not include actions on its linked action bar. <br>• A ship cannot equip more than one copy of the same card. <br>• A squad’s cards are restricted by the rules of limited and solitary cards. <br>• Some effects can “exchange” or “equip” an upgrade card from one ship to another during or after setup. <br>◊ An effect can move an upgrade to a ship that does not have the matching icon on its upgrade bar. <br>◊ An effect cannot move an upgrade to a ship that does not meet the requirements set out in the restrictions box of the upgrade card unless the effect says to equip the upgrade “ignoring restrictions.”"
      },
      "UPGRADE ICONS": {
        name: "Upgrade Icons",
        text: "Each upgrade icon uses the corresponding name listed below: <br>• %TALENT% Talent <br>• %FORCEPOWER% Force Power <br>• %TECH% Tech <br>• %SENSOR% Sensor <br>• %CANNON% Cannon <br>• %TURRET% Turret <br>• %TORPEDO% Torpedo <br>• %MISSILE% Missile <br>• %CREW% Crew <br>• %GUNNER% Gunner <br>• %TACTICALRELAY% Tactical Relay <br>• %ASTROMECH% Astromech <br>• %ILLICIT% Illicit <br>• %DEVICE% Payload <br>• %TITLE% Title <br>• %MODIFICATION% Modification <br>• %CONFIGURATION% Configuration <br>• Hyperdrive"
      },
      "UNIT": {
        name: "Unit",
        text: "Ships and remotes are units."
      },
      "VICTORY COUNTERS": {
        name: "Victory Counters",
        text: "Some scenarios have <b>victory counters</b> that are used as markers in the playea, used to track progress, or scored for completing goals during play"
      },
      "WINNING THE GAME": {
        name: "Winning the Game",
        text: "During the game, each player calculates and tracks their mission points. The player with the most mission points at the end of the game wins. <br><br>During scenario play, the game winner is determined based on the scenario’s specific victory conditions."
      },
      "ELECTRO-CHAFF CLOUD": {
        name: "Electro-Chaff Cloud",
        text: "An electro-chaff cloud has the following effects on ships: <br>• While a ship is at range 0 of an electro-chaff cloud, it cannot be locked, jammed, or coordinated by other ships. <br>• While a ship executes a maneuver, if it moves through or overlaps an electro-chaff cloud, it executes its maneuver as normal. Then, it gains one jam token and breaks all locks on it. Then, the ship skips its Perform Action step this round. <br>• While a ship is not executing a maneuver, if it moves through or overlaps an electro-chaff cloud, it gains one jam token and breaks all locks on it."
      },
      "LIMITED 2 (••) AND 3 (•••)": {
        name: "Limited 2 (••) and 3 (•••)",
        text: "As explained in the Core Rulebook, limited cards are marked with a number of bullets (“•”) equal to their limited value before their name. The core set contains numerous cards which are marked with a single bullet (“•”) that denotes them as limited 1. <br><br> If a card has two bullets (“••”) before its name, it is limited 2, and a player cannot field more than two cards with this name; if a card has three bullets (“•••”), it is limited 3, and a player cannot field more than three cards with this name, and so forth."
      },
      "MINIATURES": {
        name: "Miniatures",
        text: "Each player must have the miniatures for each ship in their squad. Players are allowed to customize their miniatures as they like but must follow these guidelines: <br>• The miniature must be made from a majority of miniature parts from the Star Wars: X-Wing miniatures line. <br>• The miniature must be easily identifiable as the ship it represents <br>• Players may not customize a miniature in such a way that any part of the miniature represents the intellectual property of any party except Lucasfilm, including: copyrighted logos, symbols, iconic elements, or other iconography. <br>• The size or pose of a customized miniature cannot interfere with gameplay. <br>• Miniatures must always be attached to a Star Wars: X-Wing base that is the appropriate size and shape of the original miniature. If two or more miniatures in play could potentially touch, causing conflict with movement or placement of ships, players may remove the miniature from its plastic pegs until the conflict is resolved. <br>• Each ship card has a ship type centered at the bottom of the card. Players may use any Star Wars: X-Wing miniature that represents the same ship model as the pilot in their squadron, so long as it is easily recognizable as the ship it represents and has the appropriate ship token fitted in the ship’s base. Example: The Customized YT-1300 Light Freighter miniature may be used to represent a Scavenged YT-1300 if the Escape Craft piece is removed and an appropriate ship token is fitted to the ship’s base."
      },
      "PURPLE ACTIONS": {
        name: "Purple Actions",
        text: "As a cost to perform a purple action, the ship performing the action must spend 1 %FORCE%."
      }
    },
    faq: {
      "ARCS": {
        name: "Arcs",
        text: "<strong>Q: Can ships that only use %SINGLETURRETARC% or %FULLFRONTARC% attacks use effects that require the ship to perform a %FRONTARC% attack? (i.e. Fearless, Outmaneuver)</strong> <br><br>A: No. Note the differences between the requirement of Fearless: <br>“While you perform a %FRONTARC% primary attack…” <br>and Punishing One: <br>“While you perform a primary attack, if the defender is in your %FRONTARC%…” <br><br>A %FRONTARC% attack uses the %FRONTARC% icon above the attack value as shown on its ship card. This is different from an attack that is performed against a ship in it’s %FRONTARC%. <br><br><strong>Q: When a ship with its turret arc indicator pointing at its %FRONTARC% performs a %FRONTARC% attack, has it also attacked from that %SINGLETURRETARC%?</strong> <br><br>A: No. For example, if a ship equipped with Veteran Turret Gunner performs a primary %FRONTARC% attack, it could use Veteran Turret Gunner’s ability to perform a %SINGLETURRETARC% attack even if the turret arc indicator is pointing at its %FRONTARC%. <br><br><strong>Q: Is a ship in its own firing arc?</strong> <br><br>A: No. <br><br><strong>Q: Does a ship’s firing arc extend to range 3 even if the weapon using that arc does not?</strong> <br><br>A: Yes. For example, if Drea Renthal (Scum, BTL-A4 Y-wing) is equipped with a Dorsal Turret [%TURRET%], she can use her ability on ships at range 1–3 in her turret arc."
      },
      "DEPLOYMENT": {
        name: "Deployment",
        text: " <strong>Q: If a ship equipped with Boba Fett [%CREW%] cannot be placed at range 0 of an obstacle and beyond range 3 of any enemy ship, what happens?</strong> <br><br>A: That ship instead defaults to being placed within range 1 of its player’s board edge."
      },
      "LIST BUILDING": {
        name: "List Building",
        text: " <strong>Q: If a ship equips an upgrade that alters one of its values (such as agility), how does this affect variable cost upgrades?</strong> <br><br>A: Other upgrades are ignored when calculating variable costs, and the base values of the ship are used. <br><br><strong>Q: Can a T-70 X-wing or M-3A Interceptor equip an upgrade that requires multiple slots with its Weapon Hardpoint ship ability (such as Barrage Rockets [%MISSILE% %MISSILE%])?</strong> <br><br>A: No. The Weapon Hardpoint ship ability grants a ship a special upgrade slot that can be used only for one upgrade that exactly matches one of the specified icons (%CANNON%, %TORPEDO%, and %MISSILE%, in this case)."
      },
      "LOCKING": {
        name: "Locking",
        text: "<strong>Q: While locking, can a player not choose an object?</strong> <br><br>A: Yes, but only if there are no valid objects to select. While locking, a player must choose another object at range 0–3 if able. Thus, acquiring a lock can fail if there is no other object at range 0–3, but only fails under this circumstance. <br><br><strong>Q: What happens when two locks from the same ship with an R3 Astromech [%ASTROMECH%] are transferred nto a single ship (such as by Captain Kagi’s [Lambda-class Shuttle] pilot ability)?</strong> <br><br>A: The R3 Astromech only allows having two locks if they are on different ships, so one of the locks breaks if they are transferred to a single ship. <br><br><strong>Q: If an effect instructs a ship to gain an additional lock token (such as Petty Officer Thanisson [%CREW%]), can a player choose to assign the ship a lock token with a different number from the first lock token?</strong> <br><br>A: No. It must gain a lock of the same number as the first (which, in most cases, causes the ship to lose the original lock, resulting in only one lock token).<br><br><strong>Q: If an effect refers to \"your tokens,\" under which circumstances is a lock considered \"your token\" or not?</strong> <br><br>A: For effects that refer to a \"your tokens,\" the lock is always the red token of the ship to which it has been assigned. For example, if Ship A acquires a lock on Ship B, the lock is Ship B's red token, not Ship A's red token. Any effect that refers to \"your tokens\" from Ship A does <strong>not</strong> refer to the lock. Any effect that refers to \"your tokens,\" from Ship B does refer to the lock. <br>Note that if an effect refers to \"your lock,\" it means the lock over which your ship has possession (the one it assigned). So if Ship A had an effect that referred to \"your lock,\" this would refer to the lock Ship A has on Ship B. For Ship B's effects, however, that same lock would <strong>not</strong> be \"your lock.\" "
      },
      "OBJECTS": {
        name: "Objects",
        text: " <strong>Q: What does “ignores obstacles” mean? Do Han Solo [Pilot, Customized YT-1300] and Qi’ra [%CREW%] work together? What about Dash Rendar [YT-2400] and Outrider [%TITLE%]?</strong> <br><br>A: When an effect says a ship “ignores obstacles,” it means that ship “ignores the effects of obstacles.” A ship that is “ignoring obstacles” does not apply the effects of overlapping or moving through them, and can move through them by boosting or barrel rolling. When that ship performs an attack that is obstructed by an obstacle it ignores the effects of the obstruction, so the defender does not roll 1 additional defense die being obstructed by the obstacles the attacker is ignoring. <br><br>However, the obstacles are still treated as being present for effects that check for their presence or absence (such as the Stunned Pilot damage card or Debris Gambit [%TALENT%]). Additionally, an attack is obstructed by an obstacle even while the effects of the obstacle are ignored. This applies to cards such as Outrider [%TITLE%], Han Solo [Pilot, Customized YT-1300], and Trick Shot (%TALENT%). <br><br>Additionally, other ships do not ignore the obstacle when resolving effects that interact with a ship that is ignoring obstacles. For instance, while a ship that is ignoring obstacles defends, if the attack is obstructed, it still rolls 1 additional defense die because the attacker is not ignoring the effects of obstacles. <br><br><strong>Q: Does a Mine, when dropped overlapping a ship in the System Phase, detonate immediately?</strong> <br><br>A: Yes. When an object is placed underneath a ship, that ship counts as overlapping that object. <br><br><strong>Q: When a ship moves through a Mine (and overlaps) does the timing window for Sabine Wren [%CREW%] occur before or after the ship has an opportunity to perform an action?</strong> <br><br>A: Trick question! Sabine only affects devices classified as bombs, not mines and other devices, such as a Proximity Mine. <br><br><strong>Q: How do fuse markers (pg. 11) interact with Mines?</strong> <br><br>A: If a ship would move through and/or overlap a fused Mine, one fuse marker is removed from the mine and it does not detonate, even if the ship remains physically on top of the mine after the fuse marker is removed. <br><br>If a ship is physically on top of a mine that did not detonate because of the effect of a fuse marker, and it moves through and/or overlaps that mine again during a later move, the mine detonates as normal. <br><br><strong>Q: If the Loose Cargo from Rigged Cargo Chute [%ILLICIT%] or Spare Parts from Spare Parts Canister [%MODIFICATION%] overlaps another ship, what happens?</strong> <br><br>A: It is placed underneath the ship, and the ship overlaps it, suffering its effects. <br><br><strong>Q: If a remote has no arcs, can abilities that resolve “while not in the defender’s %FRONTARC% (or other arc)” resolve?</strong><br><br>A: No. A ship cannot be outside of any of a remote’s arcs if that remote has no arcs.<br><br><strong>Q: What happens when a Proximity Mine is dropped such that two or more ships overlap it?</strong> <br><br>A: The owner of the Proximity Mine chooses one ship to be affected by it. <br><br><strong>Q: What happens when a set of Cluster Mines are dropped such that two or more ships overlap them?</strong> <br><br>A: The owner of the Cluster Mines first chooses one ship to be affected by each of the individual Cluster Mine. Then, in an order of that player's choosing, the dice are rolled to resolve the effect of the detonation on each of those ships. <br><br><strong>Q: When two or more devices detonate at the same time, who chooses the order of the resolution of their effects?</strong> <br><br>A: The first player resolves all of their devices in any order of their choosing, resolving each detonation and then any resultant effects (such as Sabine Wren [%CREW%]'s \"after an enemy ship is affected by a friendly bomb\" effect) fully before moving on to the next. Then the second player in player order resolves all of their bombs in any order of their choosing, resolving each detonation fully before moving on to the next (and so on, for multiplayer games)."
      },
      "ROLLING AND REROLLING DICE": {
        name: "Rolling and Rerolling Dice",
        text: "<br><br><strong>Q: Are rerolls considered \"rolling dice\" for the purposes of effects that occur before or after a player rolls dice (such as Count Dooku [%CREW%])?</strong> <br><br>A: No. While rerolls do include the physical act of picking up one or more dice and rolling them again, \"rerolling dice\" is considered distinct from \"rolling dice\" from a mechanics standpoint. <br><br><strong>Q: If a card such as Saturation Salvo [%TALENT%] instructs a player to reroll “all dice” or a specific number of dice but there are not enough eligible dice, what happens?</strong> <br><br>A: The player rerolls as many eligible dice as possible. <br><br>In the case of Saturation Salvo and similar effects, if a ship uses Saturation Salvo (which rerolls 2 defense dice) against a ship that rolled only 1 defense die, it can still cause that ship to reroll its 1 defense die by resolving the effect as completely as possible (against the 1 eligible defense die). <br><br>Note that if the ship uses Saturation Salvo against a ship that rolled 3 defense dice (for example: %EVADE%, blank, blank), it must choose exactly 2 of those dice to be rerolled, as it must resolve the effect as completely as possible (on 2 eligible dice, in this case). <br><br><strong>Q: Can Han Solo [Pilot, Modified YT-1300]’s ability be used on a die that has been rerolled?</strong> <br><br>A: Yes. Han Solo’s ability is not treated as a reroll, so it can be used on a rerolled die."
      },
      "DAMAGE CARDS": {
        name: "Damage Cards",
        text: "<strong>Q: Does the Wounded Pilot [Damage Card]’s first effect (“After you perform an action, roll 1 attack die. On a %HIT% or %CRIT% result, gain 1 stress token.”) resolve after you repair it?</strong> <br><br>A: No. The card is repaired, and thus has no effect to resolve."
      },
      "ACTIVATION PHASE AND ACTIONS": {
        name: "Activation Phase and Actions",
        text: "<strong>Q: If one effect says to \"treat an action as purple\" and another says to \"treat an action as red,\" what happens?</strong> <br><br>A: Actions have three difficulties, from least to most restrictive: white, red, and purple. <br><br>If two or more effects would alter the color of an action from its default color, the action is treated as the most restrictive of those colors. So, if an action is \"treated as red\" and \"treated as purple\" at the same time, it is treated as purple, as this is the most restrictive. <br><br><strong>Q: If the difficulty of an action is not stated (such as Lando Calrissian [Rebel, %CREW%]’s unique action or the coordinate action “Vizier” [TIE Reaper] can perform as part of its pilot ability), what is the difficulty of that action?</strong> <br><br>A: White. However, note that if a ship is instructed to perform an action “on its action bar” this way, it uses the difficulty of the action on its action bar. <br><br><strong>Q: If a ship has red evade linked to another action (such as the TIE Aggressor or Attack Shuttle), Debris Gambit [%TALENT%] equipped, and is within range of an obstacle, does it treat the linked red evade as white?</strong> <br><br>A: Yes, Debris Gambit modifies any red evade action on the ship’s action bar, including linked actions. <br><br><strong>Q: Can an ionized ship perform an action that is linked to its %FOCUS% action after performing its %FOCUS% action?</strong> <br><br>A: No. An ionized ship is limited to performing only the %FOCUS% action. <br><br><strong>Q: Can an ionized ship that is granted an non-%FOCUS% action after executing a maneuver (such as a Delta-7 Aethersprite using Fine-Tuned Controls to perform an %BARRELROLL% or %BOOST% action, or a TIE Defender using Full Throttle to perform an %EVADE% action) perform that action?</strong> <br><br>A: No. An ionized ship is limited to performing only the %FOCUS% action. <br><br><strong>Q: If a ship attempts a purple action (such as a %BARRELROLL% or %BOOST% action) and fails the action, must it still spend the %FORCE%?</strong> <br><br>A: Yes. A purple action's %FORCE% cost is a \"cost to attempt to perform [that] purple action\" (see Actions) and is still paid even if the action fails. <br><br><strong>Q: If Anakin Skywalker [Naboo Royal N-1] uses his pilot ability to barrel roll (note that this is not a %BARRELROLL% action) and fails, must he still spend the %FORCE%?</strong> <br><br>A: No. A barrel roll can fail in the same manner as a %BARRELROLL% action, but because Anakin's ability is not an action, the %FORCE% cost is a cost to resolve the effect (which Anakin cannot do in the case of failure) rather than a cost to attempt the action. <br><br><strong>Q: Does Sense [%FORCEPOWER%] require you to spend 1 %FORCE% before measuring range to other ships?</strong> <br><br>A: No. You can measure range to see which ships are at range 0–1 and which ships are at range 0–3 before deciding whether or not to spend the %FORCE% to affect a ship at range 0–3. <br><br><strong>Q: If a Quadrijet Transfer Spacetug uses its \"Spacetug Tractor Array\" action and cannot choose a ship in its front arc at range 1, what happens?</strong><br><br>A: The action fails.<br><br><strong>Q: While a ship executes a Tallon Roll maneuver, if it cannot be placed at the middle position (center line aligned to the center line of the template), is it able to fully execute the maneuver?</strong> <br><br>A: Yes, provided there is a valid position at which to place it. While executing a Tallon Roll, if a ship can be placed in at least one of the three possible positions (center line aligned to the front, middle, or back of the template), it must choose one of the valid positions, and it fully executes the maneuver. If a valid position exists, it cannot choose an invalid position to partially complete the maneuver. As with a barrel roll, while resolving this, the player may attempt to place the ship at the front, middle, and back before choosing a valid position. <br><br><strong>Q: Can Ved Foslo [TIE Advanced x1] use his ship ability to reduce the speed of a [1 %BANKLEFT%] or [1 %BANKRIGHT%] maneuver, allowing him to execute a [0 %BANKLEFT%] or [0 %BANKRIGHT%] maneuver?</strong> <br><br>A: No. 0-speed bank maneuvers can only be executed by huge ships, and cannot be executed by standard ships even if a particular ship has the ability to execute a maneuver that is not on its dial. <br><br><strong>Q: What is the difference between \"flipping a dial faceup\" and \"revealing a dial,\" and when does each apply?</strong> <br><br>A: \"Flipping a dial faceup\" is the manual act of turning the dial such that the face of the dial (containing the maneuvers) is visible. \"Revealing a dial\" is the specific act that occurs during a ship's activation. A ship that reveals its dial does flip the dial faceup as part of this process. <br><br>However, other effects that refer to \"flipping a dial faceup,\" such as the Informant (%CREW%) upgrade's Listening Device condition do not \"reveal\" the dial for the purposes of abilities that trigger when a dial is revealed. Additionally, a ship that has flipped its dial faceup can still \"reveal\" that dial at the appropriate time during its activation (and trigger any relevant effects from doing so), even though the dial is already faceup."
      },
      "ENGAGEMENT PHASE AND ATTACKING": {
        name: "Engagement Phase and Attacking",
        text: "<strong>Q: When a ship is destroyed by a game effect triggered with “before engaging,” does it still engage?</strong> <br><br>A: Yes, because the game has already reached that initiative step, it is not removed until after all ships of that initiative have engaged, per simultaneous fire. <br><br><strong>Q: When specifically during an attack do effects that apply \"while you perform an attack\" or \"while you defend\" apply?</strong> <br><br>A: Abilities are applied at the step in the attack at which they take effect. For example, in the case of Predator, as this is a dice modification, it is applied at Step 2b: Modify Attack Dice. Note, however, that effects resolved during Step 2b: Modify Attack Dice and 3b: Modify Defense Dice do not use the ability queue, as they are resolved in the order described in that section of the rules reference. <br><br><strong>Q: If a ship is destroyed, when are effects that trigger upon its destruction resolved?</strong> <br><br>A: If it was destroyed during an attack, these are resolved during Step 6: Aftermath. <br><br>Otherwise, these effects are added to the ability queue immediately (even if the ship would not yet be removed, such as due to the Simultaneous Fire rule or a card effect). <br><br><strong>Q: If a ship is destroyed and an effect such as R1-J5 [%ASTROMECH%] repairs one or more of its damage cards before it is removed, is the ship still destroyed (and thus removed)?</strong> <br><br>A: Yes. After a ship becomes \"destroyed\" for any reason, it remains destroyed no matter what effects are resolved before it is removed. Effects can change the timing at which a ship is removed, but cannot undo the state of being destroyed."
      },
      "ABILITIES AND THE ABILITY QUEUE": {
        name: "Abilities and the Ability Queue",
        text: "<strong>Q: What makes an effect an \"ability?\"</strong> <br><br>A: An ability is text from a card a player controls (such a ship card, upgrade card, damage card, remote card, device, condition card, etc). <br><br>A few abilities are constant (such as the \"Gain a %FRONTARC% primary weapon with a value of '3'\" portion of Moldy Crow). Constant abilities are not resolved via the ability queue. <br><br>Most abilities are triggered, occurring only at a specified timing window (such as the \"During the End Phase, do not remove up to 2 focus tokens\" portion of Moldy Crow). Triggered abilities are resolved via the ability queue. <br><br>Each triggered ability has the following parts: <br>A timing (when the ability is added to the ability queue) <br>An effect (what the ability does) <br>Additionally, an ability can have one or more of the following: <br>One or more requirements the ship must meet <br>One or more costs the ship must pay <br>A text box can contain multiple abilities if there are multiple constant abilities or triggers that can add an ability to the queue (as in the Moldy Crow example). <br><br><strong>Q: What is meant by a requirement for an ability?</strong> <br><br>A: A requirement for an ability is a conditional if-statement, such as \"if you are tractored\" or \"if the defender is in your bullseye arc.\" A ship being inarc at range for an attack made as part of a triggered ability, such as Snap Shot or Foresight, is also a requirement for that ability. <br><br>If an ability's requirements are not met at the time the ability would be added to the queue, it cannot be added to the queue. <br><br>If the ability's requirements are not met at the time the ability would be resolved from the queue, the ability is not resolved and is instead removed from the queue. <br><br>If an ability instructs you to make a choice, such as choosing a ship, that is not itself a requirement to initiate an ability. <br><br><strong>Q: When is the cost for an ability paid?</strong> <br><br>A: The cost for an ability is paid when the ability is resolved. An ability cannot be added to the queue if its cost could not be paid at the time it is added. <br><br>If an ability's cost cannot be paid when it would be resolved from the queue, the ability is not resolved and is instead removed from the queue. The ability's cost is not paid. <br><br>An ability can have multiple costs. If it does, all costs must be paid to resolve it. If all costs cannot be paid, no costs are paid and the ability is removed from the queue and not resolved.<br><br><strong>Q: Are optional abilities added to the ability queue automatically when they are triggered, or does a player make their choice by adding the ability to the queue?</strong> <br><br>A: They are added to the ability queue automatically when they are triggered as long as they meet the requirements to be added. Players are not required to declare each ability as it enters the queue. However, if a player does not resolve an ability during the appropriate timing window, the opportunity to do so is lost.<br><br>For example, Afterburners and Fine-Tuned Controls are both optional abilities that are added to the ability queue \"after you fully execute a maneuver.\" A Delta-7 Aethersprite equipped with Afterburners would add both abilities to the queue in an order of its player's choosing. <br><br>Note that at an ability can be added to the queue only if the requirements for it could be met. For instance, if Afterburners had no active %CHARGE% remaining, or if the Delta-7 Aethersprite had no active %FORCE% after it executed the maneuver, those abilities could not be added, respectively. <br><br><strong>Q: Are optional abilities added to the ability queue mandatory once they have been added?</strong> <br><br>A: No. When an ability is reached in the ability queue, the player makes the relevant choices for that ability, including whether or not to use it. For example, if a Delta-7 Aethersprite queues Fine-Tuned Controls and then Afterburners after it fully executes a maneuver, when the queue reaches Fine-Tuned Controls, its player makes the choice whether to pay the costs to resolve the ability, then does so. Then, when the queue reaches Afterburners, its player makes the choice whether to pay the costs to resolve the ability, then resolves it and makes any choices included in the ability. <br><br>Q: How are abilities that \"may choose a ship\" (e.g. K-2SO [%CREW%] or Darth Vader [%CREW%]) resolved when they are reached in the ability queue? <br><br>A: When an ability that \"may choose a ship\" is reached in the ability queue, before paying costs, the ship's player may measure range to any number of ships. Then, that player may choose a ship from among the valid options as defined by the ability, or choose no ship. If they choose no ship, the costs for the ability are not paid, and the ability is removed from the queue without resolving."
      },
      "SPECIFIC CARD QUESTIONS": {
        name: "Specific Card Questions",
        text: "<strong>Q: Can Cikatro Vizago [%CREW%] exchange an %ILLICIT% upgrade card onto a ship that could not normally equip it (such as equipping a Stealth Device to a Z-95 Headhunter and then exchanging it with a Rigged Cargo Chute on a YV-666)?</strong> <br><br>A: No. Cikatro Vizago cannot move the Rigged Cargo Chute to the Z-95 due to the Z-95 not meeting the “Medium or large ship” restriction on Rigged Cargo Chute, as described in Upgrade Cards. <br><br><strong>Q: When attacking with a weapon with the ordnance icon (such as Proton Rockets) or defending against an attack with the ordnance icon, can Grand Inquisitor [TIE/Advanced v1] apply the range bonus?</strong> <br><br>A: No. <br><br><strong>Q: Is Han Solo [Rebel, %GUNNER%]’s additional attack a bonus attack?</strong> <br><br>A: Yes. Anything that permits an attack outside of the standard attack allowed to a ship when it engages is a bonus attack. <br><br><strong>Q: If a ship with Han Solo [Rebel, %GUNNER%] is made to engage at initiative 7 (through Roark Garnet [HWK-290], Heightened Reflexes [%FORCEPOWER%], etc.), must it perform Han Solo’s bonus attack first?</strong> <br><br>A: Yes. Han Solo [Rebel, %GUNNER%]’s effect occurs at initiative 7 before any ship at that initiative engages (including the one to which Han Solo is equipped), so Han Solo’s bonus attack is always performed first. This means that it cannot perform Han Solo’s bonus attack and then perform a subsequent attack from the same turret arc. <br><br><strong>Q: How do effects that “prevent damage” such as Iden Versio interact with effects such as Ion Cannon and Tractor Beam that “inflict [ion, tractor, jam, etc] tokens instead of dealing damage”?</strong> <br><br>A: If an effect uses %HIT%/%CRIT% results for an effect instead of dealing damage (such as inflicting ion, tractor, or jam tokens), that effect cannot be prevented by an effect that “prevents damage.” <br><br>Note that Iden Versio can prevent the 1 damage that an Ion Cannon deals before inflicting ion tokens, but this does not prevent Iden Versio from gaining the subsequent ion tokens. <br><br><strong>Q: When the Nashtah Pup deploys, does it gain charges equal to the charge limit from the ship card with the Hound’s Tooth?</strong> <br><br>A: No, when the Nashtah Pup deploys via emergency deployment, it gains the number of active and inactive charges that the ship with the Hound’s Tooth had before it was destroyed. <br><br><strong>Q: Does the Autopilot Drone [Escape Craft]’s ability trigger if it is destroyed by another method other than running out of charges?</strong> <br><br>A: No. <br><br><strong>Q: If a ship with Cloaking Device [%ILLICIT%] rolls a focus result and then fails while attempting to decloak, what happens?</strong> <br><br>A: The ship does not remove its cloak token. <br><br><strong>Q: Can a ship use Elusive [%TALENT%] to recover charges on other upgrades by fully executing red maneuvers?</strong> <br><br>A: No. Elusive and other effects that refer to recovering charges only apply to the charges of that specific card, unless the effect explicitly states otherwise (such as Chopper [Rebel, Crew]). <br><br><strong>Q: Does Kavil (Scum, BTL-A4 Y-wing) roll an additional attack die when attacking with a turret weapon when the turret arc indicator is set to his front arc?</strong> <br><br>A: Yes. Additionally, note that Kavil would roll an additional attack die when performing an attack that specifies bullseye arc, even though the target is also by definition in his front arc. <br><br><strong>Q: If Lieutenant Sai [Lambda-class Shuttle] coordinates a ship and it performs an action followed by a linked action, can Lieutenant Sai perform the linked action instead of the initial action?</strong><br><br>A: No. Lieutenant Sai can only perform the initial action. <br><br><strong>Q: Airen Cracken [Z-95 Headhunter]’s pilot ability allows another friendly ship to “perform an action, treating it as red.” Can that ship choose to perform a red action, treating it as red? Can it choose to perform a purple action, treating it as red?</strong> <br><br>A: It can perform a red action, treating it as red. However, because purple is more difficult than red, it cannot perform a purple action, treating it as red. <br><br><strong>Q: Does the StarViper-class Attack Platform’s ship ability (Microthrusters) apply to the barrel roll that results from becoming tractored?</strong> <br><br>A: Microthrusters does affect this barrel roll. The player whose effect assigned the tractor token determines the direction and position of the template. <br><br><strong>Q: Do TIE Strikers (and Reapers) skip their perform action step if they overlap an asteroid or another ship with their Aileron’s ability maneuver?</strong> <br><br>A: No. It is only during the Execute Maneuver step that a ship skips its Perform Action step for overlapping a ship or obstacle. <br><br><strong>Q: Can a TIE Advanced x1 that rolled 1 additional die from Advanced Targeting Computer spend the lock later in the attack? If it does, can it change 1 %HIT% into a %CRIT%?</strong> <br><br>A: While performing an attack, a TIE Advanced x1 can spend its lock to reroll attack dice after rolling 1 additional die. <br><br>It can also change 1 %HIT% result to a %CRIT% result and then spend the lock to reroll attack dice. However, note that it cannot change 1 %HIT% result to a %CRIT% result after spending the lock, as it no longer has the defender locked. <br><br><strong>Q: After being destroyed, can “Deathfire” [TIE Bomber] launch a device that cannot normally be launched?</strong> <br><br>A: No. <br><br><strong>Q: If \"Deathfire\" [TIE Bomber] (or a ship with Paige Tico [%GUNNER%] equipped) placed a device during the System Phase, can that ship drop a bomb after being destroyed?</strong> <br><br>A: Yes. A ship can only place a device once during the System Phase, but it can drop an additional bomb as instructed by its pilot (or upgrade) ability. Note however that some cards that can place devices at times other than the System Phase (such as Edon Kappehl [MG-100 Starfortress] and “Genius” [%ASTROMECH%]) contain the text “If you have not dropped or launched a bomb this round,” which would prevent them from placing a subsequent device if they had placed one in the System Phase. <br><br><strong>Q: What ship’s initiative does Listening Device condition assigned by Informant [%CREW%] trigger at?</strong> <br><br>A: Listening Device’s effect triggers at the initiative of the ship that has the condition. <br><br><strong>Q: If a ship would gain a disarm token as part of paying the cost of an effect, such as Foreman Proach [Modified TIE/ln Fighter] or Quinn Jast [M3-A Interceptor], but Overseer Yushyn [Modified TIE/ln Fighter] causes them to gain a stress token instead, does the effect still resolve?</strong> <br><br>A: Yes. Overseer Yushyn [Modified TIE/ln Fighter]’s ability is a replacement effect, and if it replaces part of the cost a ship would pay to resolve an effect (in this case, the disarm token that ship would gain), that effect still resolves (see page 2, “Paying Costs”). <br><br>Note that abilities that would resolve “after a ship gains a disarm token” still do not resolve, as this is a timing window that has not occurred, rather than a cost that has been replaced. <br><br><strong>Q: If an attack made with Plasma Torpedoes [%TORPEDO%] hits, when does the defender lose a shield?</strong> <br><br>A: It is determined that the attack hit at the end of Step 4: Neutralize Results. Therefore, the ship loses the shield at the end of Step 4: Neutralize Results and before Step 5: Deal Damage. <br><br><strong>Q: What happens if a ship transfers its own lock to itself (such as by using Admiral Holdo [%CREW%])?</strong> <br><br>A: A ship cannot have a lock on itself (see Lock), so that lock breaks. <br><br><strong>Q: When an effect checks the difficulty of your revealed maneuver (such as Cova Nell’s pilot ability), do any effects that alter the difficulty of your maneuvers (such as R4 Astromech [%ASTROMECH%] or Leia Organa [Resistance, %CREW% %CREW%] apply?</strong> <br><br>A: No. The difficulty of a revealed maneuver matches its printed color. The speed and bearing of a revealed maneuver also match their printed value and type, respectively. <br><br><strong>Q: When an effect (such as Seasoned Navigator) instructs a ship to set its dial to a different maneuver \"after you reveal your dial,\" is the ship's revealed maneuver the one that was on the dial when it was revealed or the new maneuver to which it is set?</strong> <br><br>A: The ship's revealed maneuver is the one to which its dial is physically set. If an effect such as Seasoned Navigator physically sets the dial to a new maneuver, the new maneuver is the ship's revealed maneuver. If multiple effects set the dial, the revealed maneuver is the final maneuver on the dial after all effects that set it have been resolved. <br><br><strong>Q: If a ship is affected by Padmé Amidala’s pilot ability and it modifies 1 of its %FOCUS% results, can Emperor Palpatine [%CREW%, Empire]’s ability be used to modify a second %FOCUS% result?</strong> <br><br>A: Yes. The ship equipped with Emperor Palpatine (Crew) is modifying that ship’s second focus result, and not that ship itself. <br><br><strong>Q: If an effect applies a maximum to the number of dice rolled (e.g. Seventh Fleet Gunner [%GUNNER%] or Predictive Shot [%FORCEPOWER%]) and another effect instructs it to roll additional dice in excess of this maximum, does the order in which the effects were applied matter?</strong> <br><br>A: No. Once an effect sets a maximum number of dice that can be rolled (“roll 1 additional die, to a maximum of X” or “the defender cannot roll more than X defense dice”), that maximum is applied at Step 2a: Roll Attack Dice or Step 2b: Roll Defense Dice (see Attack) after all effects that cause the ship to roll additional or fewer dice have been applied. <br><br><strong>Q: If a ship with agility 0 (such as the VCX-100) is subject to one effect that would cause it to roll 1 fewer defense die and another effect that would cause it to roll 1 additional defense die, does the order in which these effects are applied change how many defense dice it rolls?</strong> <br><br>A: No. Whichever effect is applied first, it rolls 0 defense dice. If the reduction is applied first, its defense pool becomes “–1 dice” (negative 1 defense dice), then the positive modifier is applied, bringing it back to 0. On the other hand, if the increase is applied first, the decrease subsequently reduces it back to 0. <br><br>Note that after modifiers are applied but before dice are rolled, there is a default minimum of 0 dice (see Attack). Therefore if a ship would roll fewer than 0 dice due to the modifiers that have been applied, it always rolls 0 defense dice instead. <br><br><strong>Q: If a ship with agility 0 (such as the VCX-100) is strained and defends against an attack at attack range 1 (for which it would normally roll 0 defense die), does it remove the strain token?</strong> <br><br>A: Yes. Although it cannot be made to roll fewer than 0 defense dice due to the intrinsic minimum, the effect of “roll 1 fewer defense die” is applied (see Attack), and so the strain token is removed. <br><br><strong>Q: If a ship that is equipped with Kanan Jarrus [Crew] uses Inertial Dampeners [Illicit] to perform a white stationary maneuver, in which order to Kanan's ability and the \"gain 1 stress token\" portion of Inertial Dampeners' ability occur?</strong> <br><br>A: Both abilities have the same timing window: after the ship executes the maneuver. Thus, after the ship executes the white stationary maneuver, if the player chooses to spend one Force charge to activate Kanan, two abilities enter the ability queue: Inertial Dampeners' \"gain 1 stress token\" and Kanan Jarrus' \"remove 1 stress token.\" The player who controls both effects determines the order they enter the queue, and then the abilities resolve in that order. If a player wants the ship to gain and then remove a stress token, Inertial Dampeners' ability should be placed into the queue before Kanan's ability. <br><br><strong>Q: Dalan Oberos [M12-L Kimogila]'s pilot ability reads \"At the start of the Engagement Phase, you may choose 1 shielded enemy ship in your bullseye arc and spend 1 charge. If you do, that ship loses 1 shield and you recover 1 shield.\" Must both \"that ship loses 1 shield\" and \"you recover 1 shield\" be able to resolve for either to resolve?</strong> <br><br>A: Yes. \"That ship loses 1 shield and you recover 1 shield\" is a single effect, and so both parts must be able to resolve for either to occur. <br><br><strong>Q: Do Paige Tico [%GUNNER%] and \"Deathfire\" [TIE Bomber]'s abilities supersede the \"one device per round\" limitation?</strong> <br><br>A: Yes. These abilities allow one ship to drop a second device in the same round (at the relevant timing windows), as they do not include the \"if you have not dropped or launched a device this round\" limitation (as included on Edon Kappehl). <br><br><strong>Q: If an effect says that a ship \"loses a shield\" (or \"loses shields\"), has that ship suffered damage?</strong> <br><br>A: No. While suffering damage does cause a ship to lose shields (if applicable), if an effect causes a ship to lose one or more shields directly, it has not suffered damage. <br><br><strong>Q: How is Han Solo [Rebel, Modified YT-1300]'s ability categorized? Is it a dice modification? Is it a reroll? What is its timing window?</strong> <br><br>A: Han Solo's ability is treated as a dice modification effect that is not a reroll. Because it is a dice modification effect, when attacking or defending, it triggers during the Modify Dice step. Note, however, that it can also affect other die rolls, such as the roll to determine if a ship suffers damage from overlapping or moving through an asteroid. \n<br><br><strong>Q: How does Han Solo [Rebel, Modified YT-1300]'s ability interact with C-3PO [Rebel, Crew]?</strong> <br><br>A: The \"if you do and you roll exactly that many evade results...\" portion of C-3PO's ability triggers occurs after the dice are rolled, before the Modify Dice step. Thus, Han Solo's effect occurs after C-3PO's effect has been resolved. If using Han Solo after using C-3PO, the added die must be rerolled. <br><br><strong>Q: How does Han Solo [Rebel, Modified YT-1300]'s ability interact with \"Midnight\" [TIE/fo Fighter]?</strong> <br><br>A: \"Midnight\" prevents dice modification. Because Han Solo's ability is a dice modification effect, \"Midnight\" prevents it from being used. <br><br><strong>Q: If a ship executes a stationary maneuver in arc at range 2 of an enemy ship with Snap Shot equipped (or in the bullseye arc of an enemy ship with Foresight equipped), can the ship with Snap Shot (or Foresight) perform the bonus attack?</strong> <br><br>A: Yes. <br><br><strong>Q: While \"Scourge\" Skutu performs an attack using Snap Shot, if the defender is in \"Scourge\" Skutu's bullseye arc, does \"Scourge\" Skutu add an additional attack die?</strong> <br><br>A: Yes. <br><br><strong>Q: If a ship with the Fine-Tuned Controls ship ability (or another ability that triggers \"after you execute/fully execute a maneuver\") fully executes a maneuver in arc at range 2 of a ship equipped with Snap Shot, how is this resolved?</strong> <br><br>A: This is resolved one of several ways depending on which player is first player. <br><br>In all cases, both abilities (\"After you fully execute a maneuver, you may spend 1 force charge to perform a boost or barrel roll action\" and \"After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack\") are added to the ability queue. <br><br>If the first player controls the ship with Fine-Tune Controls, that player resolves this ability before Snap Shot is resolved. If, after performing a boost or barrel roll, the ship with Fine-Tuned Controls is no longer in range or arc to be chosen as a target for Snap Shot, Snap Shot cannot be resolved and is removed from the queue. <br><br>If the second player controls the ship with Fine-Tuned Controls, their opponent resolves Snap Shot first. <br><br><strong>Q: How do abilities that alter the speed, difficulty, and/or bearing of a maneuver that a ship reveals during its Reveal Dial step and executes during its Execute Maneuver step resolve? For example, if Hera Syndulla [Attack Shuttle] is equipped with R4 Astromech and Seasoned Navigator, and also has the Damaged Engine Damage Card, what happens?</strong> <br><br>A: R4 Astromech and Damaged Engine (and other constant effects that alter the difficulty of a maneuver, such as Nien Nunb [Crew], L3-37's Programming, and Leia Organa [Rebel and Resistance, Crew]) apply only during the Execute Maneuver step, for effects that trigger \"before a ship executes a maneuver\" (e.g. BB Astromech), and for effects that trigger \"after that ship executes a maneuver\" (e.g. Elusive). <br><br>So, after Hera's dial is revealed, Hera's player may add Hera's pilot ability and Seasoned Navigator's ability to the ability queue in either order. Both abilities resolve, and if Seasoned Navigator's ability is resolved, the difficulty of the maneuver is increased during the Execute Maneuver step (i.e. the difficulty has not yet been increased when Hera's pilot ability is resolved). <br><br>Then, during the Execute Maneuver step, all abilities that alter the difficulty of the maneuver are cumulative as normal. <br><br>Note that abilities that alter a maneuver without causing the ship to select a new maneuver on its dial do not affect the ship's \"revealed maneuver\" as referenced by abilities such as Ric Olié's pilot ability. <br><br><strong>Q: After a Nantex-class starfighter executes its maneuver, if it uses its Pinpoint Tractor Array ship ability to assign a tractor token to itself so that it can rotate its turret arc, and then it barrel rolls itself over a debris field as a result of becoming tractored, giving it a stress token, how does this resolve?</strong> <br><br>A: After a Nantex-class starfighter executes its maneuver, it has the option to add an ability in the queue with the effect of \"gain 1 tractor token to perform a %ROTATEARC% action.\" <br><br>When this ability resolves, the Nantex-class starfighter pays the cost (\"gain 1 tractor token\") to resolve this effect. The Nantex-class starfighter gains 1 tractor token, then performs the rotate action. Note that it does not resolve the game effect of becoming tractored (which triggers after the first time a ship becomes tractored each round) until after it fully resolves the ability by completing the rotate action. <br><br>Once the ability is fully resolved, the game effect that triggers after a ship becomes tractored is applied to the Nantex-class starfighter (before any other abilities on the queue are resolved), prompting the Nantex-class starfighter's player to move it, if they desire. If they do and this movement takes the Nantex-class starfighter onto a debris cloud, it resolves the effects of moving through or overlapping the debris cloud, including gaining 1 stress token. <br><br>Finally, any other abilities on the queue are then resolved in order. <br><br><strong>Q: Can Snap Shot or Foresight be chosen as a special weapon to be used for a ship's attack during the Engagement Phase?</strong> <br><br>A: Yes. The phrase \"after an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack\" allows the attack to be used as a bonus attack under the specified circumstances, but does not disqualify it from being used during the Engagement Phase. <br><br><strong>Q: Do abilities that reference upgrades of a specific type (such as Captain Jonus' pilot ability) affect upgrades with multiple types including that type?</strong> <br><br>A: Yes. For example, Captain Jonus' pilot ability can be used with a friendly ship's Barrage Rockets [%MISSILE% %MISSILE%], and Paige Tico [%GUNNER%]'s ability can be used with Electro-Proton Bomb [%DEVICE% %MODIFICATION%]. Each of these upgrades has the qualifying type (%MISSILE% for Barrage Rockets and %DEVICE% for Electro-Proton Bomb) in addition to its other type. <br><br>Note that the Weapon Hardpoint ability does not behave this way, as it grants a special upgrade slot. <br><br><strong>Q: When searching for a damage card with Kaz's Fireball [%TITLE%], must you show that card to your opponent?</strong> <br><br>A: No. You are not required to show the card to your opponent. <br><br><strong>Q: Can a Fireball use its \"Explosion with Wings\" ship ability without any facedown damage card to pay the cost of \"exposing 1 damage card\" to resolve the effect of \"remov[ing] 1 disarm token\"?</strong> <br><br>A: No. As exposing a damage card is a cost for removing the damage card, if the cost cannot be payed, the effect cannot be resolved. <br><br><strong>Q: If \"Rush\" becomes damaged during the Engagement Phase before the initiative 2 step, causing its initiative to become \"6\", what happens?</strong><br><br>A: \"Rush\" engages at the current initiative step, after all other ships at thatstep have engaged. <br><br><strong>Q: Does the Mining Guild TIE's Notched Stabilizers ship ability allow it to barrel roll through or onto asteroids? <br><br>A: Yes. <br><br>Q: Can Hondo Ohnaka (%CREW%) coordinate an enemy ship? If so, who chooses the action that ship performs?</strong> <br><br>A: Yes, Hondo can coordinate an enemy ship this way. When Hondo does so, the controller of the coordinated ship chooses the action. <br><br><strong>Q: When does Count Dooku (%CREW%)'s ability take effect?</strong> <br><br>A: Count Dooku's ability takes effect after the dice are rolled (before the Modify Dice step during an attack, or before other dice modification effects are applied for dice rolled at any other time). <br><br><strong>Q: What happens when two players use Count Dooku (%CREW%) on the same dice roll?</strong> <br><br>A: The first player's Count Dooku takes effect: if the roll does not contain the result the first player named, the ship's controlling player must choose one result and change it to the named result. <br><br>Then the second player's Count Dooku takes effect: if the roll does not contain the result the second player named,.the ship's controlling player must choose one result and change it to the named result. <br><br>This can potentially mean that the same die is modified twice this way. <br><br><strong>Q: Can the difficulty of a purple maneuver be reduced or increased?</strong> <br><br>A: No. However, effects can cause you to \"treat the maneuver as [a different color].\" <br><br><strong>Q: At what step of Setup does the \"Explosion with Wings\" (Fireball) occur?</strong> <br><br>A: During Step 6: Prepare Other Components, after the damage deck has been shuffled. <br><br><strong>Q: How does Chewbacca (Resistance, %CREW%) interact with the \"Explosion with Wings\" ship ability?</strong> <br><br>A: Chewbacca (Resistance, %CREW%)'s \"Setup: Lose 1 %CHARGE%\" ability occurs after the ship equipped with Chewbacca is placed during Step 5: Place Forces. <br><br>\"Explosion with Wings\" causes a ship to be dealt a damage card during Step 6: Prepare Other Components. <br><br>However, triggered abilities that do not have the \"Setup:\" header or explicitly mention a timing during Setup do not trigger during Setup. Thus, the second ability in Chewbacca's text (\"After a friendly ship at range 0–3 is dealt 1 damage card, recover 1 %CHARGE%\", which does not mention setup nor have the header, does not trigger from \"Explosion with Wings.\" <br><br><strong>Q: Can \"Holo\" (TIE/ba Interceptor)'s ship ability transfer a red lock token that has been assigned to \"Holo\" to a friendly ship?</strong> <br><br>A: Yes. That red token is included under \"your tokens,\" so Holo can transfer it. <br><br><strong>Q: Can \"Holo\" (TIE/ba Interceptor)'s ship ability transfer a red lock token that has been assigned to another ship by \"Holo\" to a friendly ship?</strong> <br><br>A: No. \"Holo\" (TIE/ba Inteceptor)'s lock is a red token assigned to another ship. It is not considered \"your token\" for the purposes of that ability (or other abilities that refer to \"your token). However, it is \"Holo\" (TIE/ba Inteceptor)'s lock, and is considered \"your lock\" for the purposes of any abilities that refer to \"your lock.\" <br><br><strong>Q: After Leia Organa (Resistance, %CREW%) reduces the difficulty of a ship's maneuver, if the reduced difficulty is blue, can the ship use BB Astromech to perform a %BARRELROLL%?</strong> <br><br>A: Yes. Leia Organa (Resistance, %CREW%) has an ability that occurs after the dial is revealed, and BB Astromech's ability is resolved subsequently, before the ship executes its maneuver. <br><br><strong>Q: What does \"closest valid attack range\" as mentioned on Automated Target Priority mean exactly?</strong> \n<br><br>A: The \"closest valid attack range\" is the closest attack range for a given attack that has one or more potential valid defenders. A valid defender is a ship at the proper attack range in arc that meets the requirements for the chosen attack (such as Attack [%LOCK%]). <br><br>For example, consider a TIE/sf fighter equipped with Concussion Missiles that has one enemy ship in its %FRONTARC% at range 0, one enemy ship outside its %FRONTARC% at range 1, two enemy ships in its %FRONTARC% at range 2, and one enemy ship in its %FRONTARC% at range 3 (on which it has a lock). Its %SINGLETURRETARC% is in its %FRONTARC%. <br><br>The TIE/sf fighter measures range (determining the above information) and chooses a weapon as normal.<br><br>If it chooses its primary weapon, it determines the closest valid attack range as follows: <br><br>Range 0: Range 0 is not a valid attack range for its primary weapon, so the enemy ship in its %FRONTARC% at range 0 cannot be selected. <br><br>Range 1: The enemy ship outside its %FRONTARC% at attack range 1 is not in arc, so it cannot be selected. As there are no potential valid defenders at range 1, range 1 is not a valid attack range. <br><br>Range 2: There are 2 enemy ships in its 󲈫 at range 2. The attack does not have any special requirements. Thus, range 2 is a valid attack range. The attacking player can choose either of these two ships as the defender, regardless of which one is physically closer. <br><br>Range 3: There was at least one valid target at range 2, so range 3 cannot be the closest valid attack range. It cannot choose the ship in its %FRONTARC% at range 3. <br><br>It chooses its Concussion Missiles, it determines the closest valid attack range as follows: <br><br>Range 0: Range 0 is not a valid attack range for Concussion Missiles, so the enemy ship in its %FRONTARC% at range 0 cannot be selected. <br><br>Range 1: Range 1 is not a valid attack range for Concussion Missiles. Even if the enemy ship at range 1 was in arc, could not be selected. <br><br>Range 2: There are 2 enemy ships in its %FRONTARC% at range 2. However, Concussion Missiles has a special requirement of Attack (%LOCK%), and the attacker does not have a lock on either ship at range 2. Thus, range 2 is not a valid attack range for Concussion Missiles. <br><br>Range 3: There is an enemy ship in the attacker's %FRONTARC% at range 3, on which the attacker has a lock. Thus, attack range 3 is a valid attack range, and the ship at range 3 can be selected as the defender. <br><br>Note that if the TIE/sf had two locks, one on the ship at range 2 and the other on the ship at range 3, Range 2 would be the closest valid attack range and thus it would be required to choose the ship on which it had a lock at Range 2. <br><br><strong>Q: After an enemy ship executes a maneuver, if it is in multiple friendly ships’ bullseye arcs, how many times can Kalani (%TACTICALRELAY%) be triggered?</strong> <br><br>A: One time. <br><br><strong>Q: Do effects that apply “while you perform an attack” (such as Fire-Control System) remain in effect during the Aftermath step of the attack?</strong> <br><br>A: No. The Aftermath step occurs after every attack, but it is not part of the attack. Note that this means that a bonus attack performed during the Aftermath step is not subject to any “while you perform an attack” effects from the original attack. <br><br><strong>Q: When a ship is instructed to gain two or more tokens from a single effect (such as Admiral Sloane), does this resolve as a single instance of gaining two or more tokens or as two or more separate instances of gaining one token?</strong> <br><br>A: It resolves as a single instance of gaining two or more tokens. Thus, if a ship is instructed to gain two or more tokens from a single effect like Admiral Sloane, this only triggers abilities that occur “after you gain a token” once. <br><br><strong>Q: Can Major Rhymer perform a %TORPEDO% or %MISSILE% attack at attack range 0?</strong> <br><br>A: Yes. Major Rhymer's pilot ability supersedes the base rule that ships cannot perform attacks at range 0. <br><br><strong>Q: If a ship equipped with Thermal Detonators (%DEVICE%) chooses to drop two Thermal Detonators, does this count as one or two instances of dropping devices?</strong> <br><br>A: Unlike Cluster Mines (%DEVICE%), Thermal Detonators are dropped one at a time, and each Thermal Detonator dropped counts as a single instance of dropping a device. This means that: <br><br>• After Paige Tico (MG-100 Starfortress) drops each Thermal Detonator, she may spend 1 %CHARGE% to drop one additional Thermal Detonator. As she has only one charge, this normally means she can drop a maximum of 3 Thermal Detonators. <br><br>• After a ship with Paige Tico (%GUNNER%) is destroyed, that ship may drop one Thermal Detonator. <br><br>• Abilities that trigger after dropping a device trigger after each Thermal Detonator is dropped. In terms of sequence, the first Thermal Detonator is dropped, any abilities that trigger from this (such as Deathrain [TIE/ca Punisher] or Delayed Fuses [%MODIFICATION%]) are added to the queue and resolve, and then the second Thermal Detonator is dropped, and any abilities that trigger from this are added to the queue and resolved. <br><br>• Trajectory Simulator (%SENSOR%) can be used for up to one Thermal Detonator, but as the two devices must be dropped (or launched) with different templates, both cannot be launched this way. <br><br><strong>Q: Are left bank (or turn) and right bank (or turn) templates of the same speed considered different templates?</strong> <br><br>A: Yes. Even though these templates are resolved with the same physical tool, they are considered different templates. <br><br>For example, the [3 %TURNLEFT%] and [3 %TURNRIGHT%], which use the same physical tool, flipped over), they are considered different templates. Thus, if an effect requires you to choose \"two different templates,\" you may select the [3 %TURNLEFT%] template and the [3 %TURNRIGHT%] template. <br><br><strong>Q: What is a structure as mentioned on Marg-Sabl Closure (%TALENT%)?</strong> <br><br>A: A structure is a... wait a second, I can't tell you that yet! You'll have to wait and see."
      }
    }
  };
};

/*
//@ sourceMappingURL=xwingcontent.js.map
*/