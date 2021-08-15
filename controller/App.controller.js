sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("", {

      onInit: function(){
         console.log("Looks like you are an Expert! Please don't judge my Noobness :P")
      },

      onBadgePress: function(evt){
         var sbadgeId = evt.getSource().getId();
         var idArray = sbadgeId.split("-");

         switch (idArray[idArray.length - 1]) {
            case 'ABAPonHANABadgeId':
               window.open("https://www.credly.com/badges/6eefed3c-1ef0-40c9-9895-29cdad196345");
               break;
            case 'AzureFundBadgeId':
               window.open("https://www.credly.com/badges/5f17086e-2efa-4417-a555-a806b607e009");
               break;
            case 'ABAPBadgeId':
               window.open("https://www.credly.com/badges/64f65332-e579-4e01-ae5c-e381999cf32b");
               break;
            case 'ActivatePMBadgeId':
               window.open("https://www.credly.com/badges/bb6f584c-f6cc-4f27-ad03-c9718defd0f1");
               break;
            case 'FioriElementsBadgeId':
               window.open("https://open.sap.com/verify/xobab-pidob-fonad-tanyz-fekaf");
               break;
            case 'FioriOverviewBadgeId':
               window.open("https://open.sap.com/verify/xones-lopyl-zanog-lyvat-fapog");
               break;
            case 'SAPDevOpsId':
               window.open("https://open.sap.com/verify/xerol-gokol-vegek-turyf-citah");
               break;
         }
      },

      onResume:function(){
         window.open("https://shorturl.at/fmDS3");
      },

      onEmail:function(){
         window.open("mailto:smuhsb@gmail.com");
      },

      onLinkedIn:function(){
         window.open("https://www.linkedin.com/in/smuhsb/");
      }

    });
 });