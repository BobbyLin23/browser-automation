<script lang="ts">
  import RiAddLine from 'remixicon-svelte/icons/add-line';
  import RiFlowChart from 'remixicon-svelte/icons/flow-chart';
  import { Button } from '#lib/components/ui/button/index.js';
  import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle
  } from '#lib/components/ui/empty/index.js';
</script>

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <RiFlowChart aria-hidden="true" />
    </EmptyMedia>
    <EmptyTitle>No workflow selected</EmptyTitle>
    <EmptyDescription>
      Select a workflow from the sidebar or create a new one to get started.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>
      <RiAddLine aria-hidden="true" />
      New workflow
    </Button>
  </EmptyContent>
</Empty>
