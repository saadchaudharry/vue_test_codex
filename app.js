const { createApp } = Vue;

createApp({
  data() {
    return {
      menu: [
        "Dashboard",
        "Products",
        "Order Management",
        "Services",
        "Return Orders",
        "Campaigns",
        "Finance",
        "Analytics",
        "My Account",
      ],
      stats: [
        {
          title: "Total Revenue",
          value: "2,420",
          delta: "▲ 40% vs last month",
          trend: "up",
        },
        {
          title: "Total Product Sales",
          value: "316",
          delta: "▲ 20% vs last month",
          trend: "up",
        },
        {
          title: "Total Service Provided",
          value: "1,210",
          delta: "▼ 10% vs last month",
          trend: "down",
        },
      ],
      miniCards: [
        { label: "On Delivery", value: "20", trend: "up", delta: "▲ 40%" },
        { label: "Pending", value: "10", trend: "down", delta: "▼ 10%" },
        { label: "Shipped", value: "35", trend: "up", delta: "▲ 90%" },
        { label: "Returned", value: "8", trend: "down", delta: "▼ 10%" },
        { label: "Failed Delivery", value: "6", trend: "down", delta: "▼ 10%" },
      ],
      miniCardsSecondary: [
        { label: "Total Booking", value: "45", trend: "up", delta: "▲ 40%" },
        { label: "Scheduled Booking", value: "24", trend: "down", delta: "▼ 10%" },
        { label: "Ongoing Booking", value: "85", trend: "up", delta: "▲ 90%" },
        { label: "Pending Payment", value: "3", trend: "down", delta: "▼ 10%" },
        { label: "Cancelled Booking", value: "2", trend: "down", delta: "▼ 10%" },
      ],
      notes: [
        {
          title: "You just got a New Order #123456",
          body: "A new order has been placed.",
          tone: "success",
          time: "Just now",
          action: "View changes",
        },
        {
          title: "Order #123456 has been Cancelled",
          body: "Ut enim ad minim veniam, quis nostrud exercitation.",
          tone: "danger",
          time: "24 July 2024, 10:00 PM",
          action: "Learn more",
        },
        {
          title: "We’ve just released a new feature",
          body: "Stay up to date with the latest experiences.",
          tone: "warn",
          time: "24 July 2024, 10:00 PM",
          action: "View changes",
        },
      ],
    };
  },
  template: `
    <div class="page">
      <div class="orb orb--left"></div>
      <div class="orb orb--right"></div>

      <main class="shell">
        <aside class="sidebar">
          <div class="logo">
            <div class="logo-badge">A</div>
            <div>
              <p class="logo-title">AutoCare</p>
              <p class="logo-sub">Service Dashboard</p>
            </div>
          </div>

          <label class="search">
            <span class="icon">🔍</span>
            <input type="text" placeholder="Search" />
          </label>

          <nav class="menu">
            <a
              v-for="item in menu"
              :key="item"
              class="menu-item"
              :class="{ active: item === 'Dashboard' }"
              href="#"
            >
              {{ item }}
            </a>
          </nav>

          <div class="sidebar-footer">
            <button class="support">Support</button>
            <button class="settings">Settings</button>
            <div class="profile">
              <div class="avatar">OR</div>
              <div>
                <p class="profile-name">Olivia Rhye</p>
                <p class="profile-email">olivia@autocare.io</p>
              </div>
            </div>
          </div>
        </aside>

        <section class="content">
          <header class="topbar">
            <label class="top-search">
              <span class="icon">🔍</span>
              <input type="text" placeholder="Search" />
            </label>
            <button class="bell">🔔</button>
          </header>

          <div class="headline">
            <div>
              <h1>Welcome back, Olivia</h1>
              <p>Track, manage, and forecast your customers and orders.</p>
            </div>
          </div>

          <div class="stats-grid">
            <article
              v-for="stat in stats"
              :key="stat.title"
              class="stat-card"
              :class="{ danger: stat.trend === 'down' }"
            >
              <div class="stat-header">
                <span>{{ stat.title }}</span>
                <span class="dots">•••</span>
              </div>
              <h2>{{ stat.value }}</h2>
              <div class="stat-footer" :class="stat.trend">
                {{ stat.delta }}
              </div>
              <div class="sparkline"></div>
            </article>
          </div>

          <div class="mini-grid">
            <article v-for="card in miniCards" :key="card.label" class="mini-card">
              <p>{{ card.label }}</p>
              <h3>{{ card.value }}</h3>
              <span :class="card.trend">{{ card.delta }}</span>
            </article>
          </div>

          <div class="mini-grid">
            <article
              v-for="card in miniCardsSecondary"
              :key="card.label"
              class="mini-card"
            >
              <p>{{ card.label }}</p>
              <h3>{{ card.value }}</h3>
              <span :class="card.trend">{{ card.delta }}</span>
            </article>
          </div>

          <section class="notifications">
            <div class="section-title">Recent Notifications</div>
            <article v-for="note in notes" :key="note.title" class="note">
              <div class="note-icon" :class="note.tone">
                <span v-if="note.tone === 'success'">✓</span>
                <span v-else-if="note.tone === 'danger'">!</span>
                <span v-else>•</span>
              </div>
              <div>
                <h4>{{ note.title }}</h4>
                <p>{{ note.body }}</p>
                <div class="note-actions">
                  <button>Dismiss</button>
                  <button class="link">{{ note.action }}</button>
                </div>
              </div>
              <span class="timestamp">{{ note.time }}</span>
            </article>
          </section>
        </section>
      </main>
    </div>
  `,
}).mount("#app");
