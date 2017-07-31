define(
  [
    'freeipa/phases',
    'freeipa/user'
  ],

  function(phases, user_mod) {
    // helper function
    function get_item(array, attr, value) {
      for (var i=0,l=array.length; i<l; i++) {
        if (array[i][attr] === value) return array[i];
      }
      return null;
    }

    var hackspace_plugin = {};
    hackspace_plugin.add_field = function() {

      var facet = get_item(user_mod.entity_spec.facets, '$type', 'details');

      var section = get_item(facet.sections, 'name', 'contact');
      section.fields.push({
           name: 'emergencycontactname',
           label: 'Emergency Contact Name'
      });
      section.fields.push({
           name: 'emergencycontactnumber',
           label: 'Emergency Contact Number'
      });

      var miscsection = get_item(facet.sections, 'name', 'misc');
      miscsection.fields.push({
           $type: 'multivalued',
           name: 'rfidcode',
           label: 'RFID code (format tag:code)'
      });
      miscsection.fields.push({
           name: 'emergencyinformation',
           label: 'Emergency Information (Allergies Etc)'
      });

      return true;
    };
    phases.on('customization', hackspace_plugin.add_field);
    return hackspace_plugin;
  }
);
