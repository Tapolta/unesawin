<script lang="ts">
  import Role from "../enums/Role.enum";

  let { role } = $props<{
    role: Role
  }>();

  const setRole = (newRole: Role) => {
    role = newRole;
  };
</script>

<ul class="flex justify-between">
  <li>
    <button
      onclick={() => setRole(Role.Pengguna)}
      class={`${
        role === Role.Pengguna ? 'bg-two text-white' : 'bg-white text-black'
      } rounded-lg py-1 w-26`}
    >
      {Role.Pengguna}
    </button>
  </li>
  <li>
    <button
      onclick={() => setRole(Role.Pemeriksa)}
      class={`${
        role === Role.Pemeriksa ? 'bg-two text-white' : 'bg-white text-black'
      } rounded-lg py-1 w-26`}
    >
      {Role.Pemeriksa}
    </button>
  </li>
  <li>
    <button
      onclick={() => setRole(Role.Radiolog)}
      class={`${
        role === Role.Radiolog ? 'bg-two text-white' : 'bg-white text-black'
      } rounded-lg py-1 w-26`}
    >
      {Role.Radiolog}
    </button>
  </li>
</ul>
