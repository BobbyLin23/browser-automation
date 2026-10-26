<script lang="ts">
  import RiAddLine from 'remixicon-svelte/icons/add-line';
  import RiFlowChart from 'remixicon-svelte/icons/flow-chart';
  import { OrganizationSwitcher, UserButton } from 'svelte-clerk';
  import { Popover, PopoverContent, PopoverTrigger } from '#lib/components/ui/popover/index.js';
  import { Separator } from '#lib/components/ui/separator/index.js';
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar
  } from '#lib/components/ui/sidebar/index.js';

  const workflows = [
    'dominant-wasp',
    'honest-reindeer',
    'expected-llama',
    'essential-ocelot',
    'creepy-echidna',
    'eastern-silkworm',
    'cultural-lion',
    'proud-weasel',
    'regional-bonobo'
  ];

  let activeWorkflow = $state(workflows[0]);

  const sidebar = useSidebar();
</script>

{#snippet WorkflowNav()}
  {#if sidebar.state === 'collapsed'}
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Popover>
              <PopoverTrigger>
                {#snippet child({
                  props
                })}
                  <SidebarMenuButton {...props} size="lg" class="justify-center">
                    <RiFlowChart />
                    <span class="sr-only">Workflows</span>
                  </SidebarMenuButton>
                {/snippet}
              </PopoverTrigger>
              <PopoverContent side="right" align="start" class="p-1">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <RiAddLine />
                      <span>New workflow</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
                <Separator />
                <SidebarMenu>
                  {#each workflows as workflow (workflow)}
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeWorkflow === workflow}
                        onclick={() => (activeWorkflow = workflow)}
                      >
                        <span>{workflow}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  {/each}
                </SidebarMenu>
              </PopoverContent>
            </Popover>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  {:else}
    <SidebarGroup>
      <SidebarGroupLabel>Workflows</SidebarGroupLabel>
      <SidebarGroupAction title="New workflow">
        <RiAddLine />
        <span class="sr-only">New workflow</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu class="gap-1">
          {#each workflows as workflow (workflow)}
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                class="h-10 p-1"
                isActive={activeWorkflow === workflow}
                tooltipContent={workflow}
                onclick={() => (activeWorkflow = workflow)}
              >
                <span>{workflow}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          {/each}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  {/if}
{/snippet}

<Sidebar collapsible="icon">
  <SidebarHeader>
    <div class="flex items-center gap-1 group-data-[collapsible=icon]:justify-center">
      <div class="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: 'w-full',
              organizationSwitcherTrigger: 'w-full justify-between gap-2'
            }
          }}
        />
      </div>
      <SidebarTrigger class="-me-1 shrink-0 group-data-[collapsible=icon]:me-0" />
    </div>
  </SidebarHeader>

  <SidebarContent> {@render WorkflowNav()} </SidebarContent>

  <SidebarFooter class="group-data-[collapsible=icon]:p-1">
    <div
      class="flex items-center px-2 py-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
    >
      <UserButton
        appearance={{
          elements: {
            userButtonTrigger:
              'ring-sidebar-ring focus-visible:ring-2 focus-visible:outline-hidden',
            userButtonAvatarBox: 'size-9'
          }
        }}
      />
    </div>
  </SidebarFooter>
</Sidebar>
