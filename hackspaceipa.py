from ipalib.plugins import user
from ipalib.parameters import Str
from ipalib import _

user.user.takes_params = user.user.takes_params + (
  Str('rfidcode*',
    cli_name='rfid',
    label=_('RFID Code'),
  ),
  Str('emergencycontactname?',
    cli_name='emergency_contact_name',
    label=_('Emergency Contact Name'),
  ),
  Str('emergencycontactnumber?',
    cli_name='emergency_contact_number',
    label=_('Emergency Contact Number'),
  ),
  Str('emergencyinformation?',
    cli_name='emergency_information',
    label=_('Emergency Information'),
  ),
)
