const { createApp } = Vue;

createApp({
  data() {
    return {
      menu: [
        { label: "Dashboard", active: false },
        { label: "Product", active: false },
        { label: "Order Management", active: true },
        { label: "Services", active: false },
        { label: "Return Orders", active: false },
        { label: "Campaigns", active: false },
        { label: "Finance", active: false },
        { label: "Analytics", active: false },
        { label: "My Account", active: false },
      ],
      orderTabs: [
        { label: "All", count: "365", active: true },
        { label: "Unpaid", count: "12" },
        { label: "To Ship", count: "8" },
        { label: "Shipping", count: "18" },
        { label: "Delivered", count: "36" },
        { label: "Failed Delivery", count: "5" },
        { label: "Cancellation", count: "2" },
        { label: "Return Or Refund", count: "6" },
      ],
      orderFilters: [
        "Today",
        "Yesterday",
        "Last 7 Days",
        "Last 30 Days",
        "Custom",
      ],
      deliveryFilters: ["All", "Normal"],
      orders: [
        {
          name: "Purolator Oil Filter 1335009 – Fits Toyota Qualis",
          price: "1,889",
          delivery: "236",
          status: "Delivered",
        },
        {
          name: "Purolator Oil Filter 1335009 – Fits Toyota Qualis",
          price: "1,889",
          delivery: "236",
          status: "Delivered",
        },
        {
          name: "Purolator Oil Filter 1335009 – Fits Toyota Qualis",
          price: "1,889",
          delivery: "236",
          status: "Delivered",
        },
        {
          name: "Purolator Oil Filter 1335009 – Fits Toyota Qualis",
          price: "1,889",
          delivery: "236",
          status: "Delivered",
        },
        {
          name: "Purolator Oil Filter 1335009 – Fits Toyota Qualis",
          price: "1,889",
          delivery: "236",
          status: "Delivered",
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
              :key="item.label"
              class="menu-item"
              :class="{ active: item.active }"
              href="#"
            >
              {{ item.label }}
            </a>
            <div class="submenu">
              <a class="submenu-item active" href="#">Order Management</a>
              <a class="submenu-item" href="#">Orders</a>
              <a class="submenu-item" href="#">Return Refund</a>
              <a class="submenu-item" href="#">Review</a>
            </div>
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
              <h1>Order Management</h1>
              <p>Track recent orders, delivery status, and fulfillment.</p>
            </div>
          </div>

          <div class="tabs">
            <button
              v-for="tab in orderTabs"
              :key="tab.label"
              class="tab"
              :class="{ active: tab.active }"
            >
              {{ tab.label }}
              <span class="tab-count">{{ tab.count }}</span>
            </button>
          </div>

          <section class="table-card">
            <div class="filters">
              <label class="filter-input">
                <span class="icon">🔍</span>
                <input type="text" placeholder="Order No" />
              </label>
              <label class="filter-input">
                <span class="icon">🔍</span>
                <input type="text" placeholder="Tracking No" />
              </label>
              <button class="sort-btn">Newest ⌄</button>
            </div>

            <div class="filter-row">
              <div class="filter-group">
                <span class="filter-label">Order Date:</span>
                <button
                  v-for="chip in orderFilters"
                  :key="chip"
                  class="chip"
                  :class="{ active: chip === 'Today' }"
                >
                  {{ chip }}
                </button>
                <button class="chip muted">Start Date</button>
                <button class="chip muted">End Date</button>
              </div>
            </div>

            <div class="filter-row">
              <div class="filter-group">
                <span class="filter-label">Delivery Type:</span>
                <button
                  v-for="chip in deliveryFilters"
                  :key="chip"
                  class="chip"
                  :class="{ active: chip === 'All' }"
                >
                  {{ chip }}
                </button>
              </div>
            </div>

            <div class="table">
              <div class="table-head">
                <span class="cell check"></span>
                <span class="cell product">Product</span>
                <span class="cell amount">Total Amount</span>
                <span class="cell delivery">Delivery</span>
                <span class="cell status">Status</span>
                <span class="cell actions">Actions</span>
              </div>
              <div v-for="order in orders" :key="order.name + order.delivery" class="table-row">
                <span class="cell check">
                  <input type="checkbox" />
                </span>
                <span class="cell product">
                  <span class="thumb">🚗</span>
                  <span class="product-name">{{ order.name }}</span>
                </span>
                <span class="cell amount">৳ {{ order.price }}</span>
                <span class="cell delivery">{{ order.delivery }}</span>
                <span class="cell status">
                  <span class="status-pill">{{ order.status }}</span>
                </span>
                <span class="cell actions">⋮</span>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  `,
}).mount("#app");
