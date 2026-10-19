<script lang="ts">
  import { OrganizationSwitcher, UserButton } from 'svelte-clerk';
  import { toast } from 'svelte-sonner';
  import { Button } from '#lib/components/ui/button/index.js';
</script>

<Button
  onclick={() =>
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.info('Undo')
      }
    })}
>
  Click
</Button>
<OrganizationSwitcher hidePersonal />
<UserButton />
